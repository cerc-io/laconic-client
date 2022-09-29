import { Chain, Sender } from '@tharsis/transactions';
import { Account } from './account';
/**
 * Generate a cosmos-sdk transaction.
 */
export declare const createTransaction: (message: any, account: Account, sender: Sender, chain: Chain) => {
    message: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxRaw;
    path: string;
};
