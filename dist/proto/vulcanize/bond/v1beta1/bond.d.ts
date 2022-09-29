import * as dependency_2 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.bond.v1beta1 {
    class Params extends pb_1.Message {
        constructor(data?: any[] | {
            max_bond_amount?: dependency_2.cosmos.base.v1beta1.Coin;
        });
        get max_bond_amount(): dependency_2.cosmos.base.v1beta1.Coin;
        set max_bond_amount(value: dependency_2.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            max_bond_amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): Params;
        toObject(): {
            max_bond_amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
    class Bond extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            owner?: string;
            balance?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get id(): string;
        set id(value: string);
        get owner(): string;
        set owner(value: string);
        get balance(): dependency_2.cosmos.base.v1beta1.Coin[];
        set balance(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            id?: string;
            owner?: string;
            balance?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): Bond;
        toObject(): {
            id?: string | undefined;
            owner?: string | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Bond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Bond;
    }
}
