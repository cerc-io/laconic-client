import * as dependency_2 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.bond.v1beta1 {
    class MsgCreateBond extends pb_1.Message {
        constructor(data?: any[] | {
            signer?: string;
            coins?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get signer(): string;
        set signer(value: string);
        get coins(): dependency_2.cosmos.base.v1beta1.Coin[];
        set coins(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            signer?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgCreateBond;
        toObject(): {
            signer?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateBond;
    }
    class MsgCreateBondResponse extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        });
        get id(): string;
        set id(value: string);
        static fromObject(data: {
            id?: string;
        }): MsgCreateBondResponse;
        toObject(): {
            id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateBondResponse;
    }
    class MsgRefillBond extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            signer?: string;
            coins?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get id(): string;
        set id(value: string);
        get signer(): string;
        set signer(value: string);
        get coins(): dependency_2.cosmos.base.v1beta1.Coin[];
        set coins(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            id?: string;
            signer?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgRefillBond;
        toObject(): {
            id?: string | undefined;
            signer?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRefillBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRefillBond;
    }
    class MsgRefillBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRefillBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRefillBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRefillBondResponse;
    }
    class MsgWithdrawBond extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            signer?: string;
            coins?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get id(): string;
        set id(value: string);
        get signer(): string;
        set signer(value: string);
        get coins(): dependency_2.cosmos.base.v1beta1.Coin[];
        set coins(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            id?: string;
            signer?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgWithdrawBond;
        toObject(): {
            id?: string | undefined;
            signer?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawBond;
    }
    class MsgWithdrawBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgWithdrawBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawBondResponse;
    }
    class MsgCancelBond extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            signer?: string;
        });
        get id(): string;
        set id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            id?: string;
            signer?: string;
        }): MsgCancelBond;
        toObject(): {
            id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelBond;
    }
    class MsgCancelBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelBondResponse;
    }
}
