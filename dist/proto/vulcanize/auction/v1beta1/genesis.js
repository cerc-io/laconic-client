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
const dependency_2 = __importStar(require("./types"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var auction;
    (function (auction) {
        var v1beta1;
        (function (v1beta1) {
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                        if ("auctions" in data && data.auctions != undefined) {
                            this.auctions = data.auctions;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.auction.v1beta1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get auctions() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.auction.v1beta1.Auction, 2);
                }
                set auctions(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = dependency_2.vulcanize.auction.v1beta1.Params.fromObject(data.params);
                    }
                    if (data.auctions != null) {
                        message.auctions = data.auctions.map(item => dependency_2.vulcanize.auction.v1beta1.Auction.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.auctions != null) {
                        data.auctions = this.auctions.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.params !== undefined)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.auctions !== undefined)
                        writer.writeRepeatedMessage(2, this.auctions, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = dependency_2.vulcanize.auction.v1beta1.Params.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.auctions, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.vulcanize.auction.v1beta1.Auction.deserialize(reader), dependency_2.vulcanize.auction.v1beta1.Auction));
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
                    return GenesisState.deserialize(bytes);
                }
            }
            v1beta1.GenesisState = GenesisState;
        })(v1beta1 = auction.v1beta1 || (auction.v1beta1 = {}));
    })(auction = vulcanize.auction || (vulcanize.auction = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
