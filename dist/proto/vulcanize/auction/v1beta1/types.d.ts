import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.auction.v1beta1 {
    class Params extends pb_1.Message {
        constructor(data?: any[] | {
            commits_duration?: dependency_2.google.protobuf.Duration;
            reveals_duration?: dependency_2.google.protobuf.Duration;
            commit_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            reveal_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            minimum_bid?: dependency_4.cosmos.base.v1beta1.Coin;
        });
        get commits_duration(): dependency_2.google.protobuf.Duration;
        set commits_duration(value: dependency_2.google.protobuf.Duration);
        get reveals_duration(): dependency_2.google.protobuf.Duration;
        set reveals_duration(value: dependency_2.google.protobuf.Duration);
        get commit_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set commit_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get reveal_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set reveal_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get minimum_bid(): dependency_4.cosmos.base.v1beta1.Coin;
        set minimum_bid(value: dependency_4.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            commits_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            reveals_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            commit_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            reveal_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            minimum_bid?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): Params;
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
    class Auction extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            status?: string;
            owner_address?: string;
            create_time?: dependency_3.google.protobuf.Timestamp;
            commits_end_time?: dependency_3.google.protobuf.Timestamp;
            reveals_end_time?: dependency_3.google.protobuf.Timestamp;
            commit_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            reveal_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            minimum_bid?: dependency_4.cosmos.base.v1beta1.Coin;
            winner_address?: string;
            winning_bid?: dependency_4.cosmos.base.v1beta1.Coin;
            winning_price?: dependency_4.cosmos.base.v1beta1.Coin;
        });
        get id(): string;
        set id(value: string);
        get status(): string;
        set status(value: string);
        get owner_address(): string;
        set owner_address(value: string);
        get create_time(): dependency_3.google.protobuf.Timestamp;
        set create_time(value: dependency_3.google.protobuf.Timestamp);
        get commits_end_time(): dependency_3.google.protobuf.Timestamp;
        set commits_end_time(value: dependency_3.google.protobuf.Timestamp);
        get reveals_end_time(): dependency_3.google.protobuf.Timestamp;
        set reveals_end_time(value: dependency_3.google.protobuf.Timestamp);
        get commit_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set commit_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get reveal_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set reveal_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get minimum_bid(): dependency_4.cosmos.base.v1beta1.Coin;
        set minimum_bid(value: dependency_4.cosmos.base.v1beta1.Coin);
        get winner_address(): string;
        set winner_address(value: string);
        get winning_bid(): dependency_4.cosmos.base.v1beta1.Coin;
        set winning_bid(value: dependency_4.cosmos.base.v1beta1.Coin);
        get winning_price(): dependency_4.cosmos.base.v1beta1.Coin;
        set winning_price(value: dependency_4.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            id?: string;
            status?: string;
            owner_address?: string;
            create_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            commits_end_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            reveals_end_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            commit_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            reveal_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            minimum_bid?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            winner_address?: string;
            winning_bid?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            winning_price?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): Auction;
        toObject(): {
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Auction;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Auction;
    }
    class Auctions extends pb_1.Message {
        constructor(data?: any[] | {
            auctions?: Auction[];
        });
        get auctions(): Auction[];
        set auctions(value: Auction[]);
        static fromObject(data: {
            auctions?: ReturnType<typeof Auction.prototype.toObject>[];
        }): Auctions;
        toObject(): {
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Auctions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Auctions;
    }
    class Bid extends pb_1.Message {
        constructor(data?: any[] | {
            auction_id?: string;
            bidder_address?: string;
            status?: string;
            commit_hash?: string;
            commit_time?: dependency_3.google.protobuf.Timestamp;
            commit_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            reveal_time?: dependency_3.google.protobuf.Timestamp;
            reveal_fee?: dependency_4.cosmos.base.v1beta1.Coin;
            bid_amount?: dependency_4.cosmos.base.v1beta1.Coin;
        });
        get auction_id(): string;
        set auction_id(value: string);
        get bidder_address(): string;
        set bidder_address(value: string);
        get status(): string;
        set status(value: string);
        get commit_hash(): string;
        set commit_hash(value: string);
        get commit_time(): dependency_3.google.protobuf.Timestamp;
        set commit_time(value: dependency_3.google.protobuf.Timestamp);
        get commit_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set commit_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get reveal_time(): dependency_3.google.protobuf.Timestamp;
        set reveal_time(value: dependency_3.google.protobuf.Timestamp);
        get reveal_fee(): dependency_4.cosmos.base.v1beta1.Coin;
        set reveal_fee(value: dependency_4.cosmos.base.v1beta1.Coin);
        get bid_amount(): dependency_4.cosmos.base.v1beta1.Coin;
        set bid_amount(value: dependency_4.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            auction_id?: string;
            bidder_address?: string;
            status?: string;
            commit_hash?: string;
            commit_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            commit_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            reveal_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            reveal_fee?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
            bid_amount?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): Bid;
        toObject(): {
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Bid;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Bid;
    }
}
