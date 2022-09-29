import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./types";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.auction.v1beta1 {
    class MsgCreateAuction extends pb_1.Message {
        constructor(data?: any[] | {
            commits_duration?: dependency_2.google.protobuf.Duration;
            reveals_duration?: dependency_2.google.protobuf.Duration;
            commit_fee?: dependency_3.cosmos.base.v1beta1.Coin;
            reveal_fee?: dependency_3.cosmos.base.v1beta1.Coin;
            minimum_bid?: dependency_3.cosmos.base.v1beta1.Coin;
            signer?: string;
        });
        get commits_duration(): dependency_2.google.protobuf.Duration;
        set commits_duration(value: dependency_2.google.protobuf.Duration);
        get reveals_duration(): dependency_2.google.protobuf.Duration;
        set reveals_duration(value: dependency_2.google.protobuf.Duration);
        get commit_fee(): dependency_3.cosmos.base.v1beta1.Coin;
        set commit_fee(value: dependency_3.cosmos.base.v1beta1.Coin);
        get reveal_fee(): dependency_3.cosmos.base.v1beta1.Coin;
        set reveal_fee(value: dependency_3.cosmos.base.v1beta1.Coin);
        get minimum_bid(): dependency_3.cosmos.base.v1beta1.Coin;
        set minimum_bid(value: dependency_3.cosmos.base.v1beta1.Coin);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            commits_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            reveals_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            commit_fee?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>;
            reveal_fee?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>;
            minimum_bid?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>;
            signer?: string;
        }): MsgCreateAuction;
        toObject(): {
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
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateAuction;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateAuction;
    }
    class MsgCreateAuctionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auction?: dependency_4.vulcanize.auction.v1beta1.Auction;
        });
        get auction(): dependency_4.vulcanize.auction.v1beta1.Auction;
        set auction(value: dependency_4.vulcanize.auction.v1beta1.Auction);
        static fromObject(data: {
            auction?: ReturnType<typeof dependency_4.vulcanize.auction.v1beta1.Auction.prototype.toObject>;
        }): MsgCreateAuctionResponse;
        toObject(): {
            auction?: {
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
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateAuctionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateAuctionResponse;
    }
    class MsgCommitBid extends pb_1.Message {
        constructor(data?: any[] | {
            auction_id?: string;
            commit_hash?: string;
            signer?: string;
        });
        get auction_id(): string;
        set auction_id(value: string);
        get commit_hash(): string;
        set commit_hash(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            auction_id?: string;
            commit_hash?: string;
            signer?: string;
        }): MsgCommitBid;
        toObject(): {
            auction_id?: string | undefined;
            commit_hash?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCommitBid;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCommitBid;
    }
    class MsgRevealBid extends pb_1.Message {
        constructor(data?: any[] | {
            auction_id?: string;
            reveal?: string;
            signer?: string;
        });
        get auction_id(): string;
        set auction_id(value: string);
        get reveal(): string;
        set reveal(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            auction_id?: string;
            reveal?: string;
            signer?: string;
        }): MsgRevealBid;
        toObject(): {
            auction_id?: string | undefined;
            reveal?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevealBid;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevealBid;
    }
    class MsgCommitBidResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bid?: dependency_4.vulcanize.auction.v1beta1.Bid;
        });
        get bid(): dependency_4.vulcanize.auction.v1beta1.Bid;
        set bid(value: dependency_4.vulcanize.auction.v1beta1.Bid);
        static fromObject(data: {
            bid?: ReturnType<typeof dependency_4.vulcanize.auction.v1beta1.Bid.prototype.toObject>;
        }): MsgCommitBidResponse;
        toObject(): {
            bid?: {
                auction_id?: string | undefined;
                bidder_address?: string | undefined;
                status?: string | undefined;
                commit_hash?: string | undefined;
                commit_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commit_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reveal_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                reveal_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                bid_amount?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCommitBidResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCommitBidResponse;
    }
    class MsgRevealBidResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auction?: dependency_4.vulcanize.auction.v1beta1.Auction;
        });
        get auction(): dependency_4.vulcanize.auction.v1beta1.Auction;
        set auction(value: dependency_4.vulcanize.auction.v1beta1.Auction);
        static fromObject(data: {
            auction?: ReturnType<typeof dependency_4.vulcanize.auction.v1beta1.Auction.prototype.toObject>;
        }): MsgRevealBidResponse;
        toObject(): {
            auction?: {
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
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevealBidResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevealBidResponse;
    }
}
