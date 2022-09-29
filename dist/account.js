"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const assert_1 = __importDefault(require("assert"));
const bip32_1 = __importDefault(require("bip32"));
const ecc = __importStar(require("tiny-secp256k1"));
const bip39 = __importStar(require("bip39"));
const canonical_json_1 = __importDefault(require("canonical-json"));
const secp256k1_1 = __importDefault(require("secp256k1"));
const ethers_1 = require("ethers");
const js_sha256_1 = require("js-sha256");
const eth_sig_util_1 = require("@metamask/eth-sig-util");
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("@cosmjs/encoding");
const address_converter_1 = require("@tharsis/address-converter");
const amino_1 = require("@cosmjs/amino");
const types_1 = require("./types");
const AMINO_PREFIX = 'EB5AE98721';
const HDPATH = "m/44'/60'/0'/0";
const bip32 = (0, bip32_1.default)(ecc);
/**
 * Registry account.
 */
class Account {
    /**
     * New Account.
     */
    constructor(privateKey) {
        (0, assert_1.default)(privateKey);
        this._privateKey = privateKey;
        this.init();
    }
    /**
     * Generate bip39 mnemonic.
     */
    static generateMnemonic() {
        return bip39.generateMnemonic();
    }
    /**
     * Generate private key from mnemonic.
     */
    static generateFromMnemonic(mnemonic) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(mnemonic);
            const seed = yield bip39.mnemonicToSeed(mnemonic);
            const wallet = bip32.fromSeed(seed);
            const account = wallet.derivePath(HDPATH);
            const { privateKey } = account;
            (0, assert_1.default)(privateKey);
            return new Account(privateKey);
        });
    }
    get privateKey() {
        return this._privateKey;
    }
    get encodedPubkey() {
        return this._encodedPubkey;
    }
    get formattedCosmosAddress() {
        return this._formattedCosmosAddress;
    }
    get registryPublicKey() {
        return this._registryPublicKey;
    }
    get registryAddress() {
        return this._registryAddress;
    }
    init() {
        // Generate public key.
        this._publicKey = secp256k1_1.default.publicKeyCreate(this._privateKey);
        this._encodedPubkey = (0, amino_1.encodeSecp256k1Pubkey)(this._publicKey).value;
        // 2. Generate eth address.
        this._ethAddress = ethers_1.utils.computeAddress(this._publicKey);
        // 3. Generate cosmos-sdk formatted address.
        this._formattedCosmosAddress = (0, address_converter_1.ethToEthermint)(this._ethAddress);
        // 4. Generate registry formatted public key.
        const publicKeyInHex = AMINO_PREFIX + (0, encoding_1.toHex)(this._publicKey);
        this._registryPublicKey = Buffer.from(publicKeyInHex, 'hex').toString('base64');
        // 5. Generate registry formatted address.
        let publicKeySha256 = (0, js_sha256_1.sha256)(Buffer.from(publicKeyInHex, 'hex'));
        this._registryAddress = new crypto_1.Ripemd160().update((0, encoding_1.fromHex)(publicKeySha256)).digest().toString();
    }
    /**
     * Get private key.
     */
    getPrivateKey() {
        return this._privateKey.toString('hex');
    }
    /**
     * Get cosmos address.
     */
    getCosmosAddress() {
        return this._formattedCosmosAddress;
    }
    /**
     * Get record signature.
     */
    signRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(record);
            const recordAsJson = (0, canonical_json_1.default)(record);
            // Double sha256.
            const recordBytesToSign = Buffer.from((0, js_sha256_1.sha256)(Buffer.from((0, js_sha256_1.sha256)(Buffer.from(recordAsJson)), 'hex')), 'hex');
            // Sign message
            (0, assert_1.default)(recordBytesToSign);
            const messageToSignSha256 = (0, js_sha256_1.sha256)(recordBytesToSign);
            const messageToSignSha256InBytes = Buffer.from(messageToSignSha256, 'hex');
            const sigObj = secp256k1_1.default.ecdsaSign(messageToSignSha256InBytes, this.privateKey);
            return Buffer.from(sigObj.signature);
        });
    }
    signPayload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(payload);
            const { record } = payload;
            const messageToSign = record.getMessageToSign();
            const sig = yield this.signRecord(messageToSign);
            (0, assert_1.default)(this.registryPublicKey);
            const signature = new types_1.Signature(this.registryPublicKey, sig.toString('base64'));
            payload.addSignature(signature);
            return signature;
        });
    }
    /**
     * Sign message.
     */
    sign(message) {
        (0, assert_1.default)(message);
        const eipMessageDomain = message.eipToSign.domain;
        const signature = (0, eth_sig_util_1.signTypedData)({
            data: {
                types: message.eipToSign.types,
                primaryType: message.eipToSign.primaryType,
                domain: eipMessageDomain,
                message: message.eipToSign.message
            },
            privateKey: this._privateKey,
            version: eth_sig_util_1.SignTypedDataVersion.V4
        });
        return signature;
    }
}
exports.Account = Account;
