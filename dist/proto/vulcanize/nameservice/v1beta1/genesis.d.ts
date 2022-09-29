import * as dependency_2 from "./nameservice";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.nameservice.v1beta1 {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.nameservice.v1beta1.Params;
            records?: dependency_2.vulcanize.nameservice.v1beta1.Record[];
            authorities?: dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry[];
            names?: dependency_2.vulcanize.nameservice.v1beta1.NameEntry[];
        });
        get params(): dependency_2.vulcanize.nameservice.v1beta1.Params;
        set params(value: dependency_2.vulcanize.nameservice.v1beta1.Params);
        get records(): dependency_2.vulcanize.nameservice.v1beta1.Record[];
        set records(value: dependency_2.vulcanize.nameservice.v1beta1.Record[]);
        get authorities(): dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry[];
        set authorities(value: dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry[]);
        get names(): dependency_2.vulcanize.nameservice.v1beta1.NameEntry[];
        set names(value: dependency_2.vulcanize.nameservice.v1beta1.NameEntry[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.Params.prototype.toObject>;
            records?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.Record.prototype.toObject>[];
            authorities?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry.prototype.toObject>[];
            names?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.NameEntry.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: {
                record_rent?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                record_rent_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                authority_rent?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                authority_rent_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                authority_grace_period?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                authority_auction_enabled?: boolean | undefined;
                authority_auction_commits_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                authority_auction_reveals_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                authority_auction_commit_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                authority_auction_reveal_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                authority_auction_minimum_bid?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            records?: {
                id?: string | undefined;
                bond_id?: string | undefined;
                create_time?: string | undefined;
                expiry_time?: string | undefined;
                deleted?: boolean | undefined;
                owners?: string[] | undefined;
                attributes?: string | undefined;
                names?: string[] | undefined;
            }[] | undefined;
            authorities?: {
                name?: string | undefined;
                entry?: {
                    owner_public_key?: string | undefined;
                    owner_address?: string | undefined;
                    height?: number | undefined;
                    status?: string | undefined;
                    auction_id?: string | undefined;
                    bond_id?: string | undefined;
                    expiry_time?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            names?: {
                name?: string | undefined;
                entry?: {
                    latest?: {
                        id?: string | undefined;
                        height?: number | undefined;
                    } | undefined;
                    history?: {
                        id?: string | undefined;
                        height?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
