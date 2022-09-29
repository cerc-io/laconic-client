/**
 * Record.
 */
export declare class Record {
    _record: any;
    /**
     * New Record.
     */
    constructor(record: any);
    get attributes(): string;
    /**
     * Serialize record.
     */
    serialize(): {
        id: string;
        bond_id: string;
        create_time: string;
        expiry_time: string;
        deleted: boolean;
        attributes: string;
    };
    /**
     * Get message to calculate record signature.
     */
    getMessageToSign(): any;
}
/**
 * Record Signature.
 */
export declare class Signature {
    _pubKey: string;
    _sig: string;
    /**
     * New Signature.
     */
    constructor(pubKey: string, sig: string);
    /**
     * Serialize Signature.
     */
    serialize(): any;
}
/**
 * Message Payload.
 */
export declare class Payload {
    _record: Record;
    _signatures: Signature[];
    /**
     * New Payload.
     */
    constructor(record: Record, ...signatures: Signature[]);
    get record(): Record;
    get signatures(): Signature[];
    /**
     * Add message signature to payload.
     */
    addSignature(signature: any): void;
    /**
     * Serialize Payload.
     */
    serialize(): {
        record: {
            id: string;
            bond_id: string;
            create_time: string;
            expiry_time: string;
            deleted: boolean;
            attributes: string;
        };
        signatures: any[];
    };
}
