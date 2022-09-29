"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vulcanize = void 0;
const dependency_2 = __importStar(require("./../../../google/protobuf/duration"));
const dependency_3 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const dependency_4 = __importStar(require("./types"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var auction;
    (function (auction) {
        var v1beta1;
        (function (v1beta1) {
            class MsgCreateAuction extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("commits_duration" in data && data.commits_duration != undefined) {
                            this.commits_duration = data.commits_duration;
                        }
                        if ("reveals_duration" in data && data.reveals_duration != undefined) {
                            this.reveals_duration = data.reveals_duration;
                        }
                        if ("commit_fee" in data && data.commit_fee != undefined) {
                            this.commit_fee = data.commit_fee;
                        }
                        if ("reveal_fee" in data && data.reveal_fee != undefined) {
                            this.reveal_fee = data.reveal_fee;
                        }
                        if ("minimum_bid" in data && data.minimum_bid != undefined) {
                            this.minimum_bid = data.minimum_bid;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get commits_duration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 1);
                }
                set commits_duration(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get reveals_duration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 2);
                }
                set reveals_duration(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get commit_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 3);
                }
                set commit_fee(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get reveal_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 4);
                }
                set reveal_fee(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get minimum_bid() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 5);
                }
                set minimum_bid(value) {
                    pb_1.Message.setWrapperField(this, 5, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 6);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                static fromObject(data) {
                    const message = new MsgCreateAuction({});
                    if (data.commits_duration != null) {
                        message.commits_duration = dependency_2.google.protobuf.Duration.fromObject(data.commits_duration);
                    }
                    if (data.reveals_duration != null) {
                        message.reveals_duration = dependency_2.google.protobuf.Duration.fromObject(data.reveals_duration);
                    }
                    if (data.commit_fee != null) {
                        message.commit_fee = dependency_3.cosmos.base.v1beta1.Coin.fromObject(data.commit_fee);
                    }
                    if (data.reveal_fee != null) {
                        message.reveal_fee = dependency_3.cosmos.base.v1beta1.Coin.fromObject(data.reveal_fee);
                    }
                    if (data.minimum_bid != null) {
                        message.minimum_bid = dependency_3.cosmos.base.v1beta1.Coin.fromObject(data.minimum_bid);
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.commits_duration != null) {
                        data.commits_duration = this.commits_duration.toObject();
                    }
                    if (this.reveals_duration != null) {
                        data.reveals_duration = this.reveals_duration.toObject();
                    }
                    if (this.commit_fee != null) {
                        data.commit_fee = this.commit_fee.toObject();
                    }
                    if (this.reveal_fee != null) {
                        data.reveal_fee = this.reveal_fee.toObject();
                    }
                    if (this.minimum_bid != null) {
                        data.minimum_bid = this.minimum_bid.toObject();
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.commits_duration !== undefined)
                        writer.writeMessage(1, this.commits_duration, () => this.commits_duration.serialize(writer));
                    if (this.reveals_duration !== undefined)
                        writer.writeMessage(2, this.reveals_duration, () => this.reveals_duration.serialize(writer));
                    if (this.commit_fee !== undefined)
                        writer.writeMessage(3, this.commit_fee, () => this.commit_fee.serialize(writer));
                    if (this.reveal_fee !== undefined)
                        writer.writeMessage(4, this.reveal_fee, () => this.reveal_fee.serialize(writer));
                    if (this.minimum_bid !== undefined)
                        writer.writeMessage(5, this.minimum_bid, () => this.minimum_bid.serialize(writer));
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(6, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateAuction();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.commits_duration, () => message.commits_duration = dependency_2.google.protobuf.Duration.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.reveals_duration, () => message.reveals_duration = dependency_2.google.protobuf.Duration.deserialize(reader));
                                break;
                            case 3:
                                reader.readMessage(message.commit_fee, () => message.commit_fee = dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 4:
                                reader.readMessage(message.reveal_fee, () => message.reveal_fee = dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 5:
                                reader.readMessage(message.minimum_bid, () => message.minimum_bid = dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 6:
                                message.signer = reader.readString();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgCreateAuction.deserialize(bytes);
                }
            }
            v1beta1.MsgCreateAuction = MsgCreateAuction;
            class MsgCreateAuctionResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction" in data && data.auction != undefined) {
                            this.auction = data.auction;
                        }
                    }
                }
                get auction() {
                    return pb_1.Message.getWrapperField(this, dependency_4.vulcanize.auction.v1beta1.Auction, 1);
                }
                set auction(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new MsgCreateAuctionResponse({});
                    if (data.auction != null) {
                        message.auction = dependency_4.vulcanize.auction.v1beta1.Auction.fromObject(data.auction);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction != null) {
                        data.auction = this.auction.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auction !== undefined)
                        writer.writeMessage(1, this.auction, () => this.auction.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateAuctionResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auction, () => message.auction = dependency_4.vulcanize.auction.v1beta1.Auction.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgCreateAuctionResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgCreateAuctionResponse = MsgCreateAuctionResponse;
            class MsgCommitBid extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction_id" in data && data.auction_id != undefined) {
                            this.auction_id = data.auction_id;
                        }
                        if ("commit_hash" in data && data.commit_hash != undefined) {
                            this.commit_hash = data.commit_hash;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get auction_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set auction_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get commit_hash() {
                    return pb_1.Message.getField(this, 2);
                }
                set commit_hash(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgCommitBid({});
                    if (data.auction_id != null) {
                        message.auction_id = data.auction_id;
                    }
                    if (data.commit_hash != null) {
                        message.commit_hash = data.commit_hash;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction_id != null) {
                        data.auction_id = this.auction_id;
                    }
                    if (this.commit_hash != null) {
                        data.commit_hash = this.commit_hash;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.auction_id === "string" && this.auction_id.length)
                        writer.writeString(1, this.auction_id);
                    if (typeof this.commit_hash === "string" && this.commit_hash.length)
                        writer.writeString(2, this.commit_hash);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCommitBid();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.auction_id = reader.readString();
                                break;
                            case 2:
                                message.commit_hash = reader.readString();
                                break;
                            case 3:
                                message.signer = reader.readString();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgCommitBid.deserialize(bytes);
                }
            }
            v1beta1.MsgCommitBid = MsgCommitBid;
            class MsgRevealBid extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction_id" in data && data.auction_id != undefined) {
                            this.auction_id = data.auction_id;
                        }
                        if ("reveal" in data && data.reveal != undefined) {
                            this.reveal = data.reveal;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get auction_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set auction_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get reveal() {
                    return pb_1.Message.getField(this, 2);
                }
                set reveal(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgRevealBid({});
                    if (data.auction_id != null) {
                        message.auction_id = data.auction_id;
                    }
                    if (data.reveal != null) {
                        message.reveal = data.reveal;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction_id != null) {
                        data.auction_id = this.auction_id;
                    }
                    if (this.reveal != null) {
                        data.reveal = this.reveal;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.auction_id === "string" && this.auction_id.length)
                        writer.writeString(1, this.auction_id);
                    if (typeof this.reveal === "string" && this.reveal.length)
                        writer.writeString(2, this.reveal);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevealBid();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.auction_id = reader.readString();
                                break;
                            case 2:
                                message.reveal = reader.readString();
                                break;
                            case 3:
                                message.signer = reader.readString();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgRevealBid.deserialize(bytes);
                }
            }
            v1beta1.MsgRevealBid = MsgRevealBid;
            class MsgCommitBidResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bid" in data && data.bid != undefined) {
                            this.bid = data.bid;
                        }
                    }
                }
                get bid() {
                    return pb_1.Message.getWrapperField(this, dependency_4.vulcanize.auction.v1beta1.Bid, 1);
                }
                set bid(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new MsgCommitBidResponse({});
                    if (data.bid != null) {
                        message.bid = dependency_4.vulcanize.auction.v1beta1.Bid.fromObject(data.bid);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bid != null) {
                        data.bid = this.bid.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bid !== undefined)
                        writer.writeMessage(1, this.bid, () => this.bid.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCommitBidResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bid, () => message.bid = dependency_4.vulcanize.auction.v1beta1.Bid.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgCommitBidResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgCommitBidResponse = MsgCommitBidResponse;
            class MsgRevealBidResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction" in data && data.auction != undefined) {
                            this.auction = data.auction;
                        }
                    }
                }
                get auction() {
                    return pb_1.Message.getWrapperField(this, dependency_4.vulcanize.auction.v1beta1.Auction, 1);
                }
                set auction(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new MsgRevealBidResponse({});
                    if (data.auction != null) {
                        message.auction = dependency_4.vulcanize.auction.v1beta1.Auction.fromObject(data.auction);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction != null) {
                        data.auction = this.auction.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auction !== undefined)
                        writer.writeMessage(1, this.auction, () => this.auction.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevealBidResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auction, () => message.auction = dependency_4.vulcanize.auction.v1beta1.Auction.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgRevealBidResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgRevealBidResponse = MsgRevealBidResponse;
        })(v1beta1 = auction.v1beta1 || (auction.v1beta1 = {}));
    })(auction = vulcanize.auction || (vulcanize.auction = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
