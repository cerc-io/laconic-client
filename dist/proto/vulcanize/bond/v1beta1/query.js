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
const dependency_2 = __importStar(require("./bond"));
const dependency_4 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_5 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var bond;
    (function (bond) {
        var v1beta1;
        (function (v1beta1) {
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
                    return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryParamsResponse({});
                    if (data.params != null) {
                        message.params = dependency_2.vulcanize.bond.v1beta1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_2.vulcanize.bond.v1beta1.Params.deserialize(reader));
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
            class QueryGetBondsRequest extends pb_1.Message {
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
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageRequest, 1);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondsRequest({});
                    if (data.pagination != null) {
                        message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryGetBondsRequest.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondsRequest = QueryGetBondsRequest;
            class QueryGetBondsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bonds" in data && data.bonds != undefined) {
                            this.bonds = data.bonds;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get bonds() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1);
                }
                set bonds(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondsResponse({});
                    if (data.bonds != null) {
                        message.bonds = data.bonds.map(item => dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bonds != null) {
                        data.bonds = this.bonds.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bonds !== undefined)
                        writer.writeRepeatedMessage(1, this.bonds, (item) => item.serialize(writer));
                    if (this.pagination !== undefined)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bonds, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader), dependency_2.vulcanize.bond.v1beta1.Bond));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryGetBondsResponse.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondsResponse = QueryGetBondsResponse;
            class QueryGetBondByIdRequest extends pb_1.Message {
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
                    const message = new QueryGetBondByIdRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondByIdRequest();
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
                    return QueryGetBondByIdRequest.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondByIdRequest = QueryGetBondByIdRequest;
            class QueryGetBondByIdResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bond" in data && data.bond != undefined) {
                            this.bond = data.bond;
                        }
                    }
                }
                get bond() {
                    return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1);
                }
                set bond(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondByIdResponse({});
                    if (data.bond != null) {
                        message.bond = dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(data.bond);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bond != null) {
                        data.bond = this.bond.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bond !== undefined)
                        writer.writeMessage(1, this.bond, () => this.bond.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondByIdResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bond, () => message.bond = dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader));
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
                    return QueryGetBondByIdResponse.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondByIdResponse = QueryGetBondByIdResponse;
            class QueryGetBondsByOwnerRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("owner" in data && data.owner != undefined) {
                            this.owner = data.owner;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get owner() {
                    return pb_1.Message.getField(this, 1);
                }
                set owner(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondsByOwnerRequest({});
                    if (data.owner != null) {
                        message.owner = data.owner;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.owner != null) {
                        data.owner = this.owner;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.owner === "string" && this.owner.length)
                        writer.writeString(1, this.owner);
                    if (this.pagination !== undefined)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsByOwnerRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.owner = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryGetBondsByOwnerRequest.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondsByOwnerRequest = QueryGetBondsByOwnerRequest;
            class QueryGetBondsByOwnerResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bonds" in data && data.bonds != undefined) {
                            this.bonds = data.bonds;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get bonds() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1);
                }
                set bonds(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondsByOwnerResponse({});
                    if (data.bonds != null) {
                        message.bonds = data.bonds.map(item => dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bonds != null) {
                        data.bonds = this.bonds.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bonds !== undefined)
                        writer.writeRepeatedMessage(1, this.bonds, (item) => item.serialize(writer));
                    if (this.pagination !== undefined)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsByOwnerResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.bonds, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader), dependency_2.vulcanize.bond.v1beta1.Bond));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryGetBondsByOwnerResponse.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondsByOwnerResponse = QueryGetBondsByOwnerResponse;
            class QueryGetBondModuleBalanceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryGetBondModuleBalanceRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondModuleBalanceRequest();
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
                    return QueryGetBondModuleBalanceRequest.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondModuleBalanceRequest = QueryGetBondModuleBalanceRequest;
            class QueryGetBondModuleBalanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                    }
                }
                get balance() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 2);
                }
                set balance(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryGetBondModuleBalanceResponse({});
                    if (data.balance != null) {
                        message.balance = data.balance.map(item => dependency_5.cosmos.base.v1beta1.Coin.fromObject(item));
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
                        writer.writeRepeatedMessage(2, this.balance, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondModuleBalanceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 2:
                                reader.readMessage(message.balance, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_5.cosmos.base.v1beta1.Coin));
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
                    return QueryGetBondModuleBalanceResponse.deserialize(bytes);
                }
            }
            v1beta1.QueryGetBondModuleBalanceResponse = QueryGetBondModuleBalanceResponse;
        })(v1beta1 = bond.v1beta1 || (bond.v1beta1 = {}));
    })(bond = vulcanize.bond || (vulcanize.bond = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
