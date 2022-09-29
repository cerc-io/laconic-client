import * as dependency_3 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_5 from "./types";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.auction.v1beta1 {
    class AuctionsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): AuctionsRequest;
        toObject(): {
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsRequest;
    }
    class AuctionsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auctions?: dependency_5.vulcanize.auction.v1beta1.Auctions;
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        });
        get auctions(): dependency_5.vulcanize.auction.v1beta1.Auctions;
        set auctions(value: dependency_5.vulcanize.auction.v1beta1.Auctions);
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            auctions?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Auctions.prototype.toObject>;
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): AuctionsResponse;
        toObject(): {
            auctions?: {
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
            } | undefined;
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsResponse;
    }
    class AuctionRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        });
        get id(): string;
        set id(value: string);
        static fromObject(data: {
            id?: string;
        }): AuctionRequest;
        toObject(): {
            id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionRequest;
    }
    class AuctionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auction?: dependency_5.vulcanize.auction.v1beta1.Auction;
        });
        get auction(): dependency_5.vulcanize.auction.v1beta1.Auction;
        set auction(value: dependency_5.vulcanize.auction.v1beta1.Auction);
        static fromObject(data: {
            auction?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Auction.prototype.toObject>;
        }): AuctionResponse;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionResponse;
    }
    class BidRequest extends pb_1.Message {
        constructor(data?: any[] | {
            auction_id?: string;
            bidder?: string;
        });
        get auction_id(): string;
        set auction_id(value: string);
        get bidder(): string;
        set bidder(value: string);
        static fromObject(data: {
            auction_id?: string;
            bidder?: string;
        }): BidRequest;
        toObject(): {
            auction_id?: string | undefined;
            bidder?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BidRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BidRequest;
    }
    class BidResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bid?: dependency_5.vulcanize.auction.v1beta1.Bid;
        });
        get bid(): dependency_5.vulcanize.auction.v1beta1.Bid;
        set bid(value: dependency_5.vulcanize.auction.v1beta1.Bid);
        static fromObject(data: {
            bid?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Bid.prototype.toObject>;
        }): BidResponse;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BidResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BidResponse;
    }
    class BidsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            auction_id?: string;
        });
        get auction_id(): string;
        set auction_id(value: string);
        static fromObject(data: {
            auction_id?: string;
        }): BidsRequest;
        toObject(): {
            auction_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BidsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BidsRequest;
    }
    class BidsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bids?: dependency_5.vulcanize.auction.v1beta1.Bid[];
        });
        get bids(): dependency_5.vulcanize.auction.v1beta1.Bid[];
        set bids(value: dependency_5.vulcanize.auction.v1beta1.Bid[]);
        static fromObject(data: {
            bids?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Bid.prototype.toObject>[];
        }): BidsResponse;
        toObject(): {
            bids?: {
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
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BidsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BidsResponse;
    }
    class AuctionsByBidderRequest extends pb_1.Message {
        constructor(data?: any[] | {
            bidder_address?: string;
        });
        get bidder_address(): string;
        set bidder_address(value: string);
        static fromObject(data: {
            bidder_address?: string;
        }): AuctionsByBidderRequest;
        toObject(): {
            bidder_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsByBidderRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsByBidderRequest;
    }
    class AuctionsByBidderResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auctions?: dependency_5.vulcanize.auction.v1beta1.Auctions;
        });
        get auctions(): dependency_5.vulcanize.auction.v1beta1.Auctions;
        set auctions(value: dependency_5.vulcanize.auction.v1beta1.Auctions);
        static fromObject(data: {
            auctions?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Auctions.prototype.toObject>;
        }): AuctionsByBidderResponse;
        toObject(): {
            auctions?: {
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
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsByBidderResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsByBidderResponse;
    }
    class AuctionsByOwnerRequest extends pb_1.Message {
        constructor(data?: any[] | {
            owner_address?: string;
        });
        get owner_address(): string;
        set owner_address(value: string);
        static fromObject(data: {
            owner_address?: string;
        }): AuctionsByOwnerRequest;
        toObject(): {
            owner_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsByOwnerRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsByOwnerRequest;
    }
    class AuctionsByOwnerResponse extends pb_1.Message {
        constructor(data?: any[] | {
            auctions?: dependency_5.vulcanize.auction.v1beta1.Auctions;
        });
        get auctions(): dependency_5.vulcanize.auction.v1beta1.Auctions;
        set auctions(value: dependency_5.vulcanize.auction.v1beta1.Auctions);
        static fromObject(data: {
            auctions?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Auctions.prototype.toObject>;
        }): AuctionsByOwnerResponse;
        toObject(): {
            auctions?: {
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
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuctionsByOwnerResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuctionsByOwnerResponse;
    }
    class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_5.vulcanize.auction.v1beta1.Params;
        });
        get params(): dependency_5.vulcanize.auction.v1beta1.Params;
        set params(value: dependency_5.vulcanize.auction.v1beta1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_5.vulcanize.auction.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    class BalanceRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): BalanceRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BalanceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BalanceRequest;
    }
    class BalanceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: dependency_4.cosmos.base.v1beta1.Coin[];
        });
        get balance(): dependency_4.cosmos.base.v1beta1.Coin[];
        set balance(value: dependency_4.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            balance?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): BalanceResponse;
        toObject(): {
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BalanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BalanceResponse;
    }
}
