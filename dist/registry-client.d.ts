/**
 * Registry
 */
export declare class RegistryClient {
    _restEndpoint: string;
    _graph: any;
    /**
     * Get query result.
     */
    static getResult(query: any, key: string, modifier?: (rows: any[]) => {}): Promise<any>;
    /**
     * Prepare response attributes.
     */
    static prepareAttributes(path: string): (rows: any[]) => any[];
    /**
     * New Client.
     */
    constructor(restEndpoint: string, gqlEndpoint: string);
    /**
     * Get server status.
     */
    getStatus(): Promise<any>;
    /**
     * Fetch Accounts.
     */
    getAccounts(addresses: string[]): Promise<any>;
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
     * Lookup authorities by names.
     */
    lookupAuthorities(names: string[], auction?: boolean): Promise<any>;
    /**
     * Get auctions by ids.
     */
    getAuctionsByIds(ids: string[]): Promise<any>;
    /**
     * Lookup names.
     */
    lookupNames(names: string[], history?: boolean): Promise<any>;
    /**
     * Resolve names to records.
     */
    resolveNames(names: string[], refs?: boolean): Promise<any>;
    /**
     * Get bonds by ids.
     */
    getBondsByIds(ids: string[]): Promise<any>;
    /**
     * Get records by attributes.
     */
    queryBonds(attributes?: {}): Promise<any>;
    /**
     * Submit transaction.
     */
    submit(tx: string): Promise<any>;
}
