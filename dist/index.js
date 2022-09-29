"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.Registry = exports.isKeyValid = exports.createBid = exports.parseTxResponse = void 0;
const is_url_1 = __importDefault(require("is-url"));
const js_sha256_1 = require("js-sha256");
const provider_1 = require("@tharsis/provider");
const transactions_1 = require("@tharsis/transactions");
const registry_client_1 = require("./registry-client");
const account_1 = require("./account");
Object.defineProperty(exports, "Account", { enumerable: true, get: function () { return account_1.Account; } });
const txbuilder_1 = require("./txbuilder");
const types_1 = require("./types");
const util_1 = require("./util");
const bond_1 = require("./messages/bond");
const nameservice_1 = require("./messages/nameservice");
const auction_1 = require("./messages/auction");
const DEFAULT_WRITE_ERROR = 'Unable to write to laconicd.';
// Parse Tx response from cosmos-sdk.
const parseTxResponse = (result, parseResponse) => {
    const { txhash: hash, height } = result, txResponse = __rest(result, ["txhash", "height"]);
    if (parseResponse) {
        txResponse.data = parseResponse(txResponse.data);
    }
    txResponse.events.forEach((event) => {
        event.attributes = event.attributes.map(({ key, value }) => ({
            key: Buffer.from(key, 'base64').toString('utf8'),
            value: Buffer.from(value, 'base64').toString('utf8')
        }));
    });
    return Object.assign({ hash, height }, txResponse);
};
exports.parseTxResponse = parseTxResponse;
/**
 * Create an auction bid.
 */
const createBid = (chainId, auctionId, bidderAddress, bidAmount, noise) => __awaiter(void 0, void 0, void 0, function* () {
    if (!noise) {
        noise = account_1.Account.generateMnemonic();
    }
    const reveal = {
        chainId,
        auctionId,
        bidderAddress,
        bidAmount,
        noise
    };
    const commitHash = yield util_1.Util.getContentId(reveal);
    const revealString = Buffer.from(JSON.stringify(reveal)).toString('hex');
    return {
        commitHash,
        reveal,
        revealString
    };
});
exports.createBid = createBid;
const isKeyValid = (key) => key && key.match(/^[0-9a-fA-F]{64}$/);
exports.isKeyValid = isKeyValid;
class Registry {
    constructor(restUrl, gqlUrl, chainId) {
        if (!(0, is_url_1.default)(restUrl)) {
            throw new Error('Path to a REST endpoint should be provided.');
        }
        if (!(0, is_url_1.default)(gqlUrl)) {
            throw new Error('Path to a GQL endpoint should be provided.');
        }
        this._endpoints = {
            rest: restUrl,
            gql: gqlUrl
        };
        this._client = new registry_client_1.RegistryClient(restUrl, gqlUrl);
        this._chainID = chainId;
        this._chain = {
            cosmosChainId: chainId,
            chainId: this._parseEthChainId(chainId)
        };
    }
    static processWriteError(error) {
        // error string a stacktrace containing the message.
        // https://gist.github.com/nikugogoi/de55d390574ded3466abad8bffd81952#file-txresponse-js-L7
        const errorMessage = nameservice_1.NAMESERVICE_ERRORS.find(message => error.includes(message));
        if (!errorMessage) {
            console.error(error);
        }
        return errorMessage || DEFAULT_WRITE_ERROR;
    }
    /**
     * Get accounts by addresses.
     */
    getAccounts(addresses) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getAccounts(addresses);
        });
    }
    get endpoints() {
        return this._endpoints;
    }
    get chainID() {
        return this._chainID;
    }
    /**
     * Get server status.
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getStatus();
        });
    }
    /**
     * Get records by ids.
     */
    getRecordsByIds(ids, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getRecordsByIds(ids, refs);
        });
    }
    /**
     * Get records by attributes.
     */
    queryRecords(attributes, all = false, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.queryRecords(attributes, all, refs);
        });
    }
    /**
     * Resolve names to records.
     */
    resolveNames(names, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.resolveNames(names, refs);
        });
    }
    /**
   * Publish record.
   * @param transactionPrivateKey - private key in HEX to sign transaction.
   */
    setRecord(params, transactionPrivateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield this._submitRecordTx(params, transactionPrivateKey, fee);
            return (0, exports.parseTxResponse)(result, nameservice_1.parseMsgSetRecordResponse);
        });
    }
    /**
     * Send coins.
     */
    sendCoins(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, transactions_1.createMessageSend)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Computes the next bondId for the given account private key.
     */
    getNextBondId(privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const accounts = yield this.getAccounts([account.formattedCosmosAddress]);
            if (!accounts.length) {
                throw new Error('Account does not exist.');
            }
            const [accountObj] = accounts;
            const nextSeq = parseInt(accountObj.sequence, 10) + 1;
            result = (0, js_sha256_1.sha256)(`${accountObj.address}:${accountObj.number}:${nextSeq}`);
            return result;
        });
    }
    /**
     * Get bonds by ids.
     */
    getBondsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getBondsByIds(ids);
        });
    }
    /**
     * Query bonds by attributes.
     */
    queryBonds(attributes = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.queryBonds(attributes);
        });
    }
    /**
     * Create bond.
     */
    createBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgCreateBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Refill bond.
     */
    refillBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgRefillBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Withdraw (from) bond.
     */
    withdrawBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgWithdrawBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Cancel bond.
     */
    cancelBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgCancelBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Associate record with bond.
     */
    associateBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgAssociateBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Dissociate record from bond.
     */
    dissociateBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgDissociateBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Dissociate all records from bond.
     */
    dissociateRecords(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgDissociateRecords)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Reassociate records (switch bond).
     */
    reassociateRecords(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, bond_1.createTxMsgReAssociateRecords)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Reserve authority.
     */
    reserveAuthority(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msgParams = {
                name: params.name,
                owner: params.owner || sender.accountAddress
            };
            const msg = (0, nameservice_1.createTxMsgReserveAuthority)(this._chain, sender, fee, '', msgParams);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Set authority bond.
     */
    setAuthorityBond(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, nameservice_1.createTxMsgSetAuthorityBond)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Commit auction bid.
     */
    commitBid(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, auction_1.createTxMsgCommitBid)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Reveal auction bid.
     */
    revealBid(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, auction_1.createTxMsgRevealBid)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Get records by ids.
     */
    getAuctionsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getAuctionsByIds(ids);
        });
    }
    /**
     * Lookup authorities by names.
     */
    lookupAuthorities(names, auction = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.lookupAuthorities(names, auction);
        });
    }
    /**
     * Set name (CRN) to record ID (CID).
     */
    setName(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, nameservice_1.createTxMsgSetName)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Lookup naming information.
     */
    lookupNames(names, history = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.lookupNames(names, history);
        });
    }
    /**
     * Delete name (CRN) mapping.
     */
    deleteName(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, nameservice_1.createTxMsgDeleteName)(this._chain, sender, fee, '', params);
            result = yield this._submitTx(msg, privateKey, sender);
            return (0, exports.parseTxResponse)(result);
        });
    }
    /**
     * Submit record transaction.
     * @param privateKey - private key in HEX to sign message.
     * @param txPrivateKey - private key in HEX to sign transaction.
     */
    _submitRecordTx({ privateKey, record, bondId }, txPrivateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, exports.isKeyValid)(privateKey)) {
                throw new Error('Registry privateKey should be a hex string.');
            }
            if (!(0, exports.isKeyValid)(bondId)) {
                throw new Error(`Invalid bondId: ${bondId}.`);
            }
            // Sign record.
            const recordSignerAccount = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const registryRecord = new types_1.Record(record);
            const payload = new types_1.Payload(registryRecord);
            yield recordSignerAccount.signPayload(payload);
            // Send record payload Tx.
            txPrivateKey = txPrivateKey || recordSignerAccount.getPrivateKey();
            return this._submitRecordPayloadTx({ payload, bondId }, txPrivateKey, fee);
        });
    }
    _submitRecordPayloadTx(params, privateKey, fee) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, exports.isKeyValid)(privateKey)) {
                throw new Error('Registry privateKey should be a hex string.');
            }
            if (!(0, exports.isKeyValid)(params.bondId)) {
                throw new Error(`Invalid bondId: ${params.bondId}.`);
            }
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            const sender = yield this._getSender(account);
            const msg = (0, nameservice_1.createTxMsgSetRecord)(this._chain, sender, fee, '', params);
            return this._submitTx(msg, privateKey, sender);
        });
    }
    /**
     * Submit a generic Tx to the chain.
     */
    _submitTx(message, privateKey, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check private key.
            if (!(0, exports.isKeyValid)(privateKey)) {
                throw new Error('Registry privateKey should be a hex string.');
            }
            // Check that the account exists on-chain.
            const account = new account_1.Account(Buffer.from(privateKey, 'hex'));
            // Generate signed Tx.
            const transaction = (0, txbuilder_1.createTransaction)(message, account, sender, this._chain);
            const tx = (0, provider_1.generatePostBodyBroadcast)(transaction, provider_1.BroadcastMode.Block);
            // Submit Tx to chain.
            const { tx_response: response } = yield this._client.submit(tx);
            if (response.code !== 0) {
                // Throw error when transaction is not successful.
                // https://docs.starport.com/guide/nameservice/05-play.html#buy-name-transaction-details
                throw new Error(Registry.processWriteError(response.raw_log));
            }
            return response;
        });
    }
    /**
     * https://evmos.dev/basics/chain_id.html
     */
    _parseEthChainId(chainId) {
        const [idWithChainNumber] = chainId.split('-');
        const [_, ethChainId] = idWithChainNumber.split('_');
        return Number(ethChainId);
    }
    /**
     * Get sender used for creating message.
     */
    _getSender(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.getAccounts([account.formattedCosmosAddress]);
            if (!accounts.length) {
                throw new Error('Account does not exist.');
            }
            const [{ number, sequence }] = accounts;
            return {
                accountAddress: account.formattedCosmosAddress,
                sequence: sequence,
                accountNumber: number,
                pubkey: account.encodedPubkey,
            };
        });
    }
}
exports.Registry = Registry;
