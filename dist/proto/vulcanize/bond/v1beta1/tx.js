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
const dependency_2 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var bond;
    (function (bond) {
        var v1beta1;
        (function (v1beta1) {
            class MsgCreateBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                        if ("coins" in data && data.coins != undefined) {
                            this.coins = data.coins;
                        }
                    }
                }
                get signer() {
                    return pb_1.Message.getField(this, 1);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get coins() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2);
                }
                set coins(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgCreateBond({});
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    if (data.coins != null) {
                        message.coins = data.coins.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    if (this.coins != null) {
                        data.coins = this.coins.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(1, this.signer);
                    if (this.coins !== undefined)
                        writer.writeRepeatedMessage(2, this.coins, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.signer = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
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
                    return MsgCreateBond.deserialize(bytes);
                }
            }
            v1beta1.MsgCreateBond = MsgCreateBond;
            class MsgCreateBondResponse extends pb_1.Message {
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
                    const message = new MsgCreateBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateBondResponse();
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
                    return MsgCreateBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgCreateBondResponse = MsgCreateBondResponse;
            class MsgRefillBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                        if ("coins" in data && data.coins != undefined) {
                            this.coins = data.coins;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get coins() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set coins(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgRefillBond({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    if (data.coins != null) {
                        message.coins = data.coins.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    if (this.coins != null) {
                        data.coins = this.coins.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (this.coins !== undefined)
                        writer.writeRepeatedMessage(3, this.coins, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRefillBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
                                break;
                            case 2:
                                message.signer = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
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
                    return MsgRefillBond.deserialize(bytes);
                }
            }
            v1beta1.MsgRefillBond = MsgRefillBond;
            class MsgRefillBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgRefillBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRefillBondResponse();
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
                    return MsgRefillBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgRefillBondResponse = MsgRefillBondResponse;
            class MsgWithdrawBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                        if ("coins" in data && data.coins != undefined) {
                            this.coins = data.coins;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get coins() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set coins(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgWithdrawBond({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    if (data.coins != null) {
                        message.coins = data.coins.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    if (this.coins != null) {
                        data.coins = this.coins.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (this.coins !== undefined)
                        writer.writeRepeatedMessage(3, this.coins, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
                                break;
                            case 2:
                                message.signer = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
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
                    return MsgWithdrawBond.deserialize(bytes);
                }
            }
            v1beta1.MsgWithdrawBond = MsgWithdrawBond;
            class MsgWithdrawBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgWithdrawBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawBondResponse();
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
                    return MsgWithdrawBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgWithdrawBondResponse = MsgWithdrawBondResponse;
            class MsgCancelBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgCancelBond({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
                                break;
                            case 2:
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
                    return MsgCancelBond.deserialize(bytes);
                }
            }
            v1beta1.MsgCancelBond = MsgCancelBond;
            class MsgCancelBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgCancelBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelBondResponse();
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
                    return MsgCancelBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgCancelBondResponse = MsgCancelBondResponse;
        })(v1beta1 = bond.v1beta1 || (bond.v1beta1 = {}));
    })(bond = vulcanize.bond || (vulcanize.bond = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
