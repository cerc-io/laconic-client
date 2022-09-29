import { Chain, Sender, Fee, MessageSendParams } from '@tharsis/transactions';
import { RegistryClient } from "./registry-client";
import { Account } from "./account";
import { MessageMsgAssociateBond, MessageMsgCancelBond, MessageMsgCreateBond, MessageMsgDissociateBond, MessageMsgDissociateRecords, MessageMsgReAssociateRecords, MessageMsgRefillBond, MessageMsgWithdrawBond } from "./messages/bond";
import { MessageMsgDeleteName, MessageMsgSetAuthorityBond, MessageMsgSetName, MessageMsgSetRecord } from './messages/nameservice';
import { MessageMsgCommitBid, MessageMsgRevealBid } from './messages/auction';
export declare const parseTxResponse: (result: any, parseResponse?: ((data: string) => any) | undefined) => any;
/**
 * Create an auction bid.
 */
export declare const createBid: (chainId: string, auctionId: string, bidderAddress: string, bidAmount: string, noise?: string | undefined) => Promise<{
    commitHash: string;
    reveal: {
        chainId: string;
        auctionId: string;
        bidderAddress: string;
        bidAmount: string;
        noise: string;
    };
    revealString: string;
}>;
export declare const isKeyValid: (key: string) => "" | RegExpMatchArray | null;
export declare class Registry {
    _endpoints: {
        [key: string]: string;
    };
    _chainID: string;
    _chain: Chain;
    _client: RegistryClient;
    static processWriteError(error: string): string;
    constructor(restUrl: string, gqlUrl: string, chainId: string);
    /**
     * Get accounts by addresses.
     */
    getAccounts(addresses: string[]): Promise<any>;
    get endpoints(): {
        [key: string]: string;
    };
    get chainID(): string;
    /**
     * Get server status.
     */
    getStatus(): Promise<any>;
    /**
     * Get records by ids.
     */
    getRecordsByIds(ids: string[], refs?: boolean): Promise<any>;
    /**
     * Get records by attributes.
     */
    queryRecords(attributes: {
        [key: string]: any;
    }, all?: boolean, refs?: boolean): Promise<any>;
    /**
     * Resolve names to records.
     */
    resolveNames(names: string[], refs?: boolean): Promise<any>;
    /**
   * Publish record.
   * @param transactionPrivateKey - private key in HEX to sign transaction.
   */
    setRecord(params: {
        privateKey: string;
        record: any;
        bondId: string;
    }, transactionPrivateKey: string, fee: Fee): Promise<any>;
    /**
     * Send coins.
     */
    sendCoins(params: MessageSendParams, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Computes the next bondId for the given account private key.
     */
    getNextBondId(privateKey: string): Promise<string>;
    /**
     * Get bonds by ids.
     */
    getBondsByIds(ids: string[]): Promise<any>;
    /**
     * Query bonds by attributes.
     */
    queryBonds(attributes?: {}): Promise<any>;
    /**
     * Create bond.
     */
    createBond(params: MessageMsgCreateBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Refill bond.
     */
    refillBond(params: MessageMsgRefillBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Withdraw (from) bond.
     */
    withdrawBond(params: MessageMsgWithdrawBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Cancel bond.
     */
    cancelBond(params: MessageMsgCancelBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Associate record with bond.
     */
    associateBond(params: MessageMsgAssociateBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Dissociate record from bond.
     */
    dissociateBond(params: MessageMsgDissociateBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Dissociate all records from bond.
     */
    dissociateRecords(params: MessageMsgDissociateRecords, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Reassociate records (switch bond).
     */
    reassociateRecords(params: MessageMsgReAssociateRecords, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Reserve authority.
     */
    reserveAuthority(params: {
        name: string;
        owner?: string;
    }, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Set authority bond.
     */
    setAuthorityBond(params: MessageMsgSetAuthorityBond, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Commit auction bid.
     */
    commitBid(params: MessageMsgCommitBid, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Reveal auction bid.
     */
    revealBid(params: MessageMsgRevealBid, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Get records by ids.
     */
    getAuctionsByIds(ids: string[]): Promise<any>;
    /**
     * Lookup authorities by names.
     */
    lookupAuthorities(names: string[], auction?: boolean): Promise<any>;
    /**
     * Set name (CRN) to record ID (CID).
     */
    setName(params: MessageMsgSetName, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Lookup naming information.
     */
    lookupNames(names: string[], history?: boolean): Promise<any>;
    /**
     * Delete name (CRN) mapping.
     */
    deleteName(params: MessageMsgDeleteName, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Submit record transaction.
     * @param privateKey - private key in HEX to sign message.
     * @param txPrivateKey - private key in HEX to sign transaction.
     */
    _submitRecordTx({ privateKey, record, bondId }: {
        privateKey: string;
        record: any;
        bondId: string;
    }, txPrivateKey: string, fee: Fee): Promise<any>;
    _submitRecordPayloadTx(params: MessageMsgSetRecord, privateKey: string, fee: Fee): Promise<any>;
    /**
     * Submit a generic Tx to the chain.
     */
    _submitTx(message: any, privateKey: string, sender: Sender): Promise<any>;
    /**
     * https://evmos.dev/basics/chain_id.html
     */
    _parseEthChainId(chainId: string): number;
    /**
     * Get sender used for creating message.
     */
    _getSender(account: Account): Promise<{
        accountAddress: string;
        sequence: any;
        accountNumber: any;
        pubkey: string;
    }>;
}
export { Account };
