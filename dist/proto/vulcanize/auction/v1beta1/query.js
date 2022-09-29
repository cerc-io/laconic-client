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
const dependency_3 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_4 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const dependency_5 = __importStar(require("./types"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var auction;
    (function (auction) {
        var v1beta1;
        (function (v1beta1) {
            class AuctionsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 1);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionsRequest({});
                    if (data.pagination != null) {
                        message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.pagination !== undefined)
                        writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return AuctionsRequest.deserialize(bytes);
                }
            }
            v1beta1.AuctionsRequest = AuctionsRequest;
            class AuctionsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auctions" in data && data.auctions != undefined) {
                            this.auctions = data.auctions;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get auctions() {
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Auctions, 1);
                }
                set auctions(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new AuctionsResponse({});
                    if (data.auctions != null) {
                        message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.fromObject(data.auctions);
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auctions != null) {
                        data.auctions = this.auctions.toObject();
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auctions !== undefined)
                        writer.writeMessage(1, this.auctions, () => this.auctions.serialize(writer));
                    if (this.pagination !== undefined)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auctions, () => message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return AuctionsResponse.deserialize(bytes);
                }
            }
            v1beta1.AuctionsResponse = AuctionsResponse;
            class AuctionRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionRequest({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
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
                    return AuctionRequest.deserialize(bytes);
                }
            }
            v1beta1.AuctionRequest = AuctionRequest;
            class AuctionResponse extends pb_1.Message {
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
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Auction, 1);
                }
                set auction(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionResponse({});
                    if (data.auction != null) {
                        message.auction = dependency_5.vulcanize.auction.v1beta1.Auction.fromObject(data.auction);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auction, () => message.auction = dependency_5.vulcanize.auction.v1beta1.Auction.deserialize(reader));
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
                    return AuctionResponse.deserialize(bytes);
                }
            }
            v1beta1.AuctionResponse = AuctionResponse;
            class BidRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction_id" in data && data.auction_id != undefined) {
                            this.auction_id = data.auction_id;
                        }
                        if ("bidder" in data && data.bidder != undefined) {
                            this.bidder = data.bidder;
                        }
                    }
                }
                get auction_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set auction_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get bidder() {
                    return pb_1.Message.getField(this, 2);
                }
                set bidder(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new BidRequest({});
                    if (data.auction_id != null) {
                        message.auction_id = data.auction_id;
                    }
                    if (data.bidder != null) {
                        message.bidder = data.bidder;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction_id != null) {
                        data.auction_id = this.auction_id;
                    }
                    if (this.bidder != null) {
                        data.bidder = this.bidder;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.auction_id === "string" && this.auction_id.length)
                        writer.writeString(1, this.auction_id);
                    if (typeof this.bidder === "string" && this.bidder.length)
                        writer.writeString(2, this.bidder);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BidRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.auction_id = reader.readString();
                                break;
                            case 2:
                                message.bidder = reader.readString();
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
                    return BidRequest.deserialize(bytes);
                }
            }
            v1beta1.BidRequest = BidRequest;
            class BidResponse extends pb_1.Message {
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
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Bid, 1);
                }
                set bid(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new BidResponse({});
                    if (data.bid != null) {
                        message.bid = dependency_5.vulcanize.auction.v1beta1.Bid.fromObject(data.bid);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BidResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bid, () => message.bid = dependency_5.vulcanize.auction.v1beta1.Bid.deserialize(reader));
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
                    return BidResponse.deserialize(bytes);
                }
            }
            v1beta1.BidResponse = BidResponse;
            class BidsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction_id" in data && data.auction_id != undefined) {
                            this.auction_id = data.auction_id;
                        }
                    }
                }
                get auction_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set auction_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new BidsRequest({});
                    if (data.auction_id != null) {
                        message.auction_id = data.auction_id;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction_id != null) {
                        data.auction_id = this.auction_id;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.auction_id === "string" && this.auction_id.length)
                        writer.writeString(1, this.auction_id);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BidsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.auction_id = reader.readString();
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
                    return BidsRequest.deserialize(bytes);
                }
            }
            v1beta1.BidsRequest = BidsRequest;
            class BidsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bids" in data && data.bids != undefined) {
                            this.bids = data.bids;
                        }
                    }
                }
                get bids() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Bid, 1);
                }
                set bids(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new BidsResponse({});
                    if (data.bids != null) {
                        message.bids = data.bids.map(item => dependency_5.vulcanize.auction.v1beta1.Bid.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bids != null) {
                        data.bids = this.bids.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bids !== undefined)
                        writer.writeRepeatedMessage(1, this.bids, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BidsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bids, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.vulcanize.auction.v1beta1.Bid.deserialize(reader), dependency_5.vulcanize.auction.v1beta1.Bid));
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
                    return BidsResponse.deserialize(bytes);
                }
            }
            v1beta1.BidsResponse = BidsResponse;
            class AuctionsByBidderRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bidder_address" in data && data.bidder_address != undefined) {
                            this.bidder_address = data.bidder_address;
                        }
                    }
                }
                get bidder_address() {
                    return pb_1.Message.getField(this, 1);
                }
                set bidder_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionsByBidderRequest({});
                    if (data.bidder_address != null) {
                        message.bidder_address = data.bidder_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bidder_address != null) {
                        data.bidder_address = this.bidder_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.bidder_address === "string" && this.bidder_address.length)
                        writer.writeString(1, this.bidder_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsByBidderRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.bidder_address = reader.readString();
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
                    return AuctionsByBidderRequest.deserialize(bytes);
                }
            }
            v1beta1.AuctionsByBidderRequest = AuctionsByBidderRequest;
            class AuctionsByBidderResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auctions" in data && data.auctions != undefined) {
                            this.auctions = data.auctions;
                        }
                    }
                }
                get auctions() {
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Auctions, 1);
                }
                set auctions(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionsByBidderResponse({});
                    if (data.auctions != null) {
                        message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.fromObject(data.auctions);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auctions != null) {
                        data.auctions = this.auctions.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auctions !== undefined)
                        writer.writeMessage(1, this.auctions, () => this.auctions.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsByBidderResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auctions, () => message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.deserialize(reader));
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
                    return AuctionsByBidderResponse.deserialize(bytes);
                }
            }
            v1beta1.AuctionsByBidderResponse = AuctionsByBidderResponse;
            class AuctionsByOwnerRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("owner_address" in data && data.owner_address != undefined) {
                            this.owner_address = data.owner_address;
                        }
                    }
                }
                get owner_address() {
                    return pb_1.Message.getField(this, 1);
                }
                set owner_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionsByOwnerRequest({});
                    if (data.owner_address != null) {
                        message.owner_address = data.owner_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.owner_address != null) {
                        data.owner_address = this.owner_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.owner_address === "string" && this.owner_address.length)
                        writer.writeString(1, this.owner_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsByOwnerRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.owner_address = reader.readString();
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
                    return AuctionsByOwnerRequest.deserialize(bytes);
                }
            }
            v1beta1.AuctionsByOwnerRequest = AuctionsByOwnerRequest;
            class AuctionsByOwnerResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auctions" in data && data.auctions != undefined) {
                            this.auctions = data.auctions;
                        }
                    }
                }
                get auctions() {
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Auctions, 1);
                }
                set auctions(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new AuctionsByOwnerResponse({});
                    if (data.auctions != null) {
                        message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.fromObject(data.auctions);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auctions != null) {
                        data.auctions = this.auctions.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auctions !== undefined)
                        writer.writeMessage(1, this.auctions, () => this.auctions.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuctionsByOwnerResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auctions, () => message.auctions = dependency_5.vulcanize.auction.v1beta1.Auctions.deserialize(reader));
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
                    return AuctionsByOwnerResponse.deserialize(bytes);
                }
            }
            v1beta1.AuctionsByOwnerResponse = AuctionsByOwnerResponse;
            class QueryParamsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryParamsRequest({});
                    return message;
                }
                toObject() {
                    const data = {};
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return QueryParamsRequest.deserialize(bytes);
                }
            }
            v1beta1.QueryParamsRequest = QueryParamsRequest;
            class QueryParamsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_5.vulcanize.auction.v1beta1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryParamsResponse({});
                    if (data.params != null) {
                        message.params = dependency_5.vulcanize.auction.v1beta1.Params.fromObject(data.params);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.params !== undefined)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = dependency_5.vulcanize.auction.v1beta1.Params.deserialize(reader));
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
                    return QueryParamsResponse.deserialize(bytes);
                }
            }
            v1beta1.QueryParamsResponse = QueryParamsResponse;
            class BalanceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new BalanceRequest({});
                    return message;
                }
                toObject() {
                    const data = {};
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BalanceRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return BalanceRequest.deserialize(bytes);
                }
            }
            v1beta1.BalanceRequest = BalanceRequest;
            class BalanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                    }
                }
                get balance() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set balance(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new BalanceResponse({});
                    if (data.balance != null) {
                        message.balance = data.balance.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balance != null) {
                        data.balance = this.balance.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.balance !== undefined)
                        writer.writeRepeatedMessage(1, this.balance, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BalanceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.balance, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
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
                    return BalanceResponse.deserialize(bytes);
                }
            }
            v1beta1.BalanceResponse = BalanceResponse;
        })(v1beta1 = auction.v1beta1 || (auction.v1beta1 = {}));
    })(auction = vulcanize.auction || (vulcanize.auction = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
