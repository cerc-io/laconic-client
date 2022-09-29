import * as dependency_2 from "./bond";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.bond.v1beta1 {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.bond.v1beta1.Params;
            bonds?: dependency_2.vulcanize.bond.v1beta1.Bond[];
        });
        get params(): dependency_2.vulcanize.bond.v1beta1.Params;
        set params(value: dependency_2.vulcanize.bond.v1beta1.Params);
        get bonds(): dependency_2.vulcanize.bond.v1beta1.Bond[];
        set bonds(value: dependency_2.vulcanize.bond.v1beta1.Bond[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Params.prototype.toObject>;
            bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: {
                max_bond_amount?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            bonds?: {
                id?: string | undefined;
                owner?: string | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
