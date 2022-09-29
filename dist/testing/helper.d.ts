import { Fee } from '@tharsis/transactions';
import { Registry } from '../index';
export declare const ensureUpdatedConfig: (path: string) => Promise<any>;
export declare const getBaseConfig: (path: string) => Promise<any>;
/**
 * Provision a bond for record registration.
 */
export declare const provisionBondId: (registry: Registry, privateKey: string, fee: Fee) => Promise<any>;
export declare const getConfig: () => {
    chainId: string;
    privateKey: string;
    restEndpoint: string;
    gqlEndpoint: string;
    fee: {
        amount: string;
        denom: string;
        gas: string;
    };
};
