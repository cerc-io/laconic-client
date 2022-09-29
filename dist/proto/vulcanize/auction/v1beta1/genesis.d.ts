import * as dependency_2 from "./types";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.auction.v1beta1 {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.auction.v1beta1.Params;
            auctions?: dependency_2.vulcanize.auction.v1beta1.Auction[];
        });
        get params(): dependency_2.vulcanize.auction.v1beta1.Params;
        set params(value: dependency_2.vulcanize.auction.v1beta1.Params);
        get auctions(): dependency_2.vulcanize.auction.v1beta1.Auction[];
        set auctions(value: dependency_2.vulcanize.auction.v1beta1.Auction[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.auction.v1beta1.Params.prototype.toObject>;
            auctions?: ReturnType<typeof dependency_2.vulcanize.auction.v1beta1.Auction.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: {
                commits_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                reveals_duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commit_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reveal_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                minimum_bid?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            auctions?: {
                id?: string | undefined;
                status?: string | undefined;
                owner_address?: string | undefined;
                create_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commits_end_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                reveals_end_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commit_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reveal_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                minimum_bid?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                winner_address?: string | undefined;
                winning_bid?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                winning_price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
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
