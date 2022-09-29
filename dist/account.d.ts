/// <reference types="node" />
import { Payload, Signature } from './types';
/**
 * Registry account.
 */
export declare class Account {
    _privateKey: Buffer;
    _publicKey: Uint8Array;
    _encodedPubkey: string;
    _formattedCosmosAddress: string;
    _registryPublicKey: string;
    _registryAddress: string;
    _ethAddress: string;
    /**
     * Generate bip39 mnemonic.
     */
    static generateMnemonic(): string;
    /**
     * Generate private key from mnemonic.
     */
    static generateFromMnemonic(mnemonic: string): Promise<Account>;
    /**
     * New Account.
     */
    constructor(privateKey: Buffer);
    get privateKey(): Buffer;
    get encodedPubkey(): string;
    get formattedCosmosAddress(): string;
    get registryPublicKey(): string;
    get registryAddress(): string;
    init(): void;
    /**
     * Get private key.
     */
    getPrivateKey(): string;
    /**
     * Get cosmos address.
     */
    getCosmosAddress(): string;
    /**
     * Get record signature.
     */
    signRecord(record: any): Promise<Buffer>;
    signPayload(payload: Payload): Promise<Signature>;
    /**
     * Sign message.
     */
    sign(message: any): string;
}
