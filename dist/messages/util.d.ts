import { Message } from "google-protobuf";
import { Chain, Sender, Fee } from '@tharsis/transactions';
interface Msg {
    type: string;
    value: any;
}
interface MsgCosmos {
    message: Message;
    path: string;
}
interface Types {
    [key: string]: Array<{
        name: string;
        type: string;
    }>;
}
export declare const createTx: (chain: Chain, sender: Sender, fee: Fee, memo: string, messageTypes: Types, msg: Msg, msgCosmos: MsgCosmos) => {
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
export {};
