import { Chain, Sender, Fee } from '@tharsis/transactions';
export interface MessageMsgCommitBid {
    auctionId: string;
    commitHash: string;
}
export interface MessageMsgRevealBid {
    auctionId: string;
    reveal: string;
}
export declare function createTxMsgCommitBid(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageMsgCommitBid): {
    signDirect: {
        body: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: object;
        primaryType: string;
        domain: {
            name: string;
            version: string;
            chainId: number;
            verifyingContract: string;
            salt: string;
        };
        message: object;
    };
};
export declare function createTxMsgRevealBid(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageMsgRevealBid): {
    signDirect: {
        body: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("@tharsis/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: object;
        primaryType: string;
        domain: {
            name: string;
            version: string;
            chainId: number;
            verifyingContract: string;
            salt: string;
        };
        message: object;
    };
};
