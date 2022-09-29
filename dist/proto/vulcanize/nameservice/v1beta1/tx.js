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
const dependency_2 = __importStar(require("./nameservice"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var nameservice;
    (function (nameservice) {
        var v1beta1;
        (function (v1beta1) {
            class MsgSetRecord extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bond_id" in data && data.bond_id != undefined) {
                            this.bond_id = data.bond_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                        if ("payload" in data && data.payload != undefined) {
                            this.payload = data.payload;
                        }
                    }
                }
                get bond_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set bond_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get payload() {
                    return pb_1.Message.getWrapperField(this, Payload, 3);
                }
                set payload(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgSetRecord({});
                    if (data.bond_id != null) {
                        message.bond_id = data.bond_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    if (data.payload != null) {
                        message.payload = Payload.fromObject(data.payload);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bond_id != null) {
                        data.bond_id = this.bond_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    if (this.payload != null) {
                        data.payload = this.payload.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.bond_id === "string" && this.bond_id.length)
                        writer.writeString(1, this.bond_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (this.payload !== undefined)
                        writer.writeMessage(3, this.payload, () => this.payload.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetRecord();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.bond_id = reader.readString();
                                break;
                            case 2:
                                message.signer = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.payload, () => message.payload = Payload.deserialize(reader));
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
                    return MsgSetRecord.deserialize(bytes);
                }
            }
            v1beta1.MsgSetRecord = MsgSetRecord;
            class MsgSetRecordResponse extends pb_1.Message {
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
                    const message = new MsgSetRecordResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetRecordResponse();
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
                    return MsgSetRecordResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgSetRecordResponse = MsgSetRecordResponse;
            class Payload extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("record" in data && data.record != undefined) {
                            this.record = data.record;
                        }
                        if ("signatures" in data && data.signatures != undefined) {
                            this.signatures = data.signatures;
                        }
                    }
                }
                get record() {
                    return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.Record, 1);
                }
                set record(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get signatures() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.Signature, 2);
                }
                set signatures(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new Payload({});
                    if (data.record != null) {
                        message.record = dependency_2.vulcanize.nameservice.v1beta1.Record.fromObject(data.record);
                    }
                    if (data.signatures != null) {
                        message.signatures = data.signatures.map(item => dependency_2.vulcanize.nameservice.v1beta1.Signature.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.record != null) {
                        data.record = this.record.toObject();
                    }
                    if (this.signatures != null) {
                        data.signatures = this.signatures.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.record !== undefined)
                        writer.writeMessage(1, this.record, () => this.record.serialize(writer));
                    if (this.signatures !== undefined)
                        writer.writeRepeatedMessage(2, this.signatures, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Payload();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.record, () => message.record = dependency_2.vulcanize.nameservice.v1beta1.Record.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.signatures, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.vulcanize.nameservice.v1beta1.Signature.deserialize(reader), dependency_2.vulcanize.nameservice.v1beta1.Signature));
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
                    return Payload.deserialize(bytes);
                }
            }
            v1beta1.Payload = Payload;
            class MsgSetName extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("crn" in data && data.crn != undefined) {
                            this.crn = data.crn;
                        }
                        if ("cid" in data && data.cid != undefined) {
                            this.cid = data.cid;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get crn() {
                    return pb_1.Message.getField(this, 1);
                }
                set crn(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get cid() {
                    return pb_1.Message.getField(this, 2);
                }
                set cid(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgSetName({});
                    if (data.crn != null) {
                        message.crn = data.crn;
                    }
                    if (data.cid != null) {
                        message.cid = data.cid;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.crn != null) {
                        data.crn = this.crn;
                    }
                    if (this.cid != null) {
                        data.cid = this.cid;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.crn === "string" && this.crn.length)
                        writer.writeString(1, this.crn);
                    if (typeof this.cid === "string" && this.cid.length)
                        writer.writeString(2, this.cid);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetName();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.crn = reader.readString();
                                break;
                            case 2:
                                message.cid = reader.readString();
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
                    return MsgSetName.deserialize(bytes);
                }
            }
            v1beta1.MsgSetName = MsgSetName;
            class MsgSetNameResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgSetNameResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetNameResponse();
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
                    return MsgSetNameResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgSetNameResponse = MsgSetNameResponse;
            class MsgReserveAuthority extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("name" in data && data.name != undefined) {
                            this.name = data.name;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                        if ("owner" in data && data.owner != undefined) {
                            this.owner = data.owner;
                        }
                    }
                }
                get name() {
                    return pb_1.Message.getField(this, 1);
                }
                set name(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get owner() {
                    return pb_1.Message.getField(this, 3);
                }
                set owner(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgReserveAuthority({});
                    if (data.name != null) {
                        message.name = data.name;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    if (data.owner != null) {
                        message.owner = data.owner;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.name != null) {
                        data.name = this.name;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    if (this.owner != null) {
                        data.owner = this.owner;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.name === "string" && this.name.length)
                        writer.writeString(1, this.name);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (typeof this.owner === "string" && this.owner.length)
                        writer.writeString(3, this.owner);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgReserveAuthority();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.name = reader.readString();
                                break;
                            case 2:
                                message.signer = reader.readString();
                                break;
                            case 3:
                                message.owner = reader.readString();
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
                    return MsgReserveAuthority.deserialize(bytes);
                }
            }
            v1beta1.MsgReserveAuthority = MsgReserveAuthority;
            class MsgReserveAuthorityResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgReserveAuthorityResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgReserveAuthorityResponse();
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
                    return MsgReserveAuthorityResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgReserveAuthorityResponse = MsgReserveAuthorityResponse;
            class MsgSetAuthorityBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("name" in data && data.name != undefined) {
                            this.name = data.name;
                        }
                        if ("bond_id" in data && data.bond_id != undefined) {
                            this.bond_id = data.bond_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get name() {
                    return pb_1.Message.getField(this, 1);
                }
                set name(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get bond_id() {
                    return pb_1.Message.getField(this, 2);
                }
                set bond_id(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgSetAuthorityBond({});
                    if (data.name != null) {
                        message.name = data.name;
                    }
                    if (data.bond_id != null) {
                        message.bond_id = data.bond_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.name != null) {
                        data.name = this.name;
                    }
                    if (this.bond_id != null) {
                        data.bond_id = this.bond_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.name === "string" && this.name.length)
                        writer.writeString(1, this.name);
                    if (typeof this.bond_id === "string" && this.bond_id.length)
                        writer.writeString(2, this.bond_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetAuthorityBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.name = reader.readString();
                                break;
                            case 2:
                                message.bond_id = reader.readString();
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
                    return MsgSetAuthorityBond.deserialize(bytes);
                }
            }
            v1beta1.MsgSetAuthorityBond = MsgSetAuthorityBond;
            class MsgSetAuthorityBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgSetAuthorityBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetAuthorityBondResponse();
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
                    return MsgSetAuthorityBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgSetAuthorityBondResponse = MsgSetAuthorityBondResponse;
            class MsgDeleteNameAuthority extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("crn" in data && data.crn != undefined) {
                            this.crn = data.crn;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get crn() {
                    return pb_1.Message.getField(this, 1);
                }
                set crn(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgDeleteNameAuthority({});
                    if (data.crn != null) {
                        message.crn = data.crn;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.crn != null) {
                        data.crn = this.crn;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.crn === "string" && this.crn.length)
                        writer.writeString(1, this.crn);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDeleteNameAuthority();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.crn = reader.readString();
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
                    return MsgDeleteNameAuthority.deserialize(bytes);
                }
            }
            v1beta1.MsgDeleteNameAuthority = MsgDeleteNameAuthority;
            class MsgDeleteNameAuthorityResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgDeleteNameAuthorityResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDeleteNameAuthorityResponse();
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
                    return MsgDeleteNameAuthorityResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgDeleteNameAuthorityResponse = MsgDeleteNameAuthorityResponse;
            class MsgRenewRecord extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("record_id" in data && data.record_id != undefined) {
                            this.record_id = data.record_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get record_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set record_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgRenewRecord({});
                    if (data.record_id != null) {
                        message.record_id = data.record_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.record_id != null) {
                        data.record_id = this.record_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.record_id === "string" && this.record_id.length)
                        writer.writeString(1, this.record_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRenewRecord();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.record_id = reader.readString();
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
                    return MsgRenewRecord.deserialize(bytes);
                }
            }
            v1beta1.MsgRenewRecord = MsgRenewRecord;
            class MsgRenewRecordResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgRenewRecordResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRenewRecordResponse();
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
                    return MsgRenewRecordResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgRenewRecordResponse = MsgRenewRecordResponse;
            class MsgAssociateBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("record_id" in data && data.record_id != undefined) {
                            this.record_id = data.record_id;
                        }
                        if ("bond_id" in data && data.bond_id != undefined) {
                            this.bond_id = data.bond_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get record_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set record_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get bond_id() {
                    return pb_1.Message.getField(this, 2);
                }
                set bond_id(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgAssociateBond({});
                    if (data.record_id != null) {
                        message.record_id = data.record_id;
                    }
                    if (data.bond_id != null) {
                        message.bond_id = data.bond_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.record_id != null) {
                        data.record_id = this.record_id;
                    }
                    if (this.bond_id != null) {
                        data.bond_id = this.bond_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.record_id === "string" && this.record_id.length)
                        writer.writeString(1, this.record_id);
                    if (typeof this.bond_id === "string" && this.bond_id.length)
                        writer.writeString(2, this.bond_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAssociateBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.record_id = reader.readString();
                                break;
                            case 2:
                                message.bond_id = reader.readString();
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
                    return MsgAssociateBond.deserialize(bytes);
                }
            }
            v1beta1.MsgAssociateBond = MsgAssociateBond;
            class MsgAssociateBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgAssociateBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAssociateBondResponse();
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
                    return MsgAssociateBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgAssociateBondResponse = MsgAssociateBondResponse;
            class MsgDissociateBond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("record_id" in data && data.record_id != undefined) {
                            this.record_id = data.record_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get record_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set record_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgDissociateBond({});
                    if (data.record_id != null) {
                        message.record_id = data.record_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.record_id != null) {
                        data.record_id = this.record_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.record_id === "string" && this.record_id.length)
                        writer.writeString(1, this.record_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDissociateBond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.record_id = reader.readString();
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
                    return MsgDissociateBond.deserialize(bytes);
                }
            }
            v1beta1.MsgDissociateBond = MsgDissociateBond;
            class MsgDissociateBondResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgDissociateBondResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDissociateBondResponse();
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
                    return MsgDissociateBondResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgDissociateBondResponse = MsgDissociateBondResponse;
            class MsgDissociateRecords extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bond_id" in data && data.bond_id != undefined) {
                            this.bond_id = data.bond_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get bond_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set bond_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 2);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgDissociateRecords({});
                    if (data.bond_id != null) {
                        message.bond_id = data.bond_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bond_id != null) {
                        data.bond_id = this.bond_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.bond_id === "string" && this.bond_id.length)
                        writer.writeString(1, this.bond_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(2, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDissociateRecords();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.bond_id = reader.readString();
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
                    return MsgDissociateRecords.deserialize(bytes);
                }
            }
            v1beta1.MsgDissociateRecords = MsgDissociateRecords;
            class MsgDissociateRecordsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgDissociateRecordsResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDissociateRecordsResponse();
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
                    return MsgDissociateRecordsResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgDissociateRecordsResponse = MsgDissociateRecordsResponse;
            class MsgReAssociateRecords extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("new_bond_id" in data && data.new_bond_id != undefined) {
                            this.new_bond_id = data.new_bond_id;
                        }
                        if ("old_bond_id" in data && data.old_bond_id != undefined) {
                            this.old_bond_id = data.old_bond_id;
                        }
                        if ("signer" in data && data.signer != undefined) {
                            this.signer = data.signer;
                        }
                    }
                }
                get new_bond_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set new_bond_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get old_bond_id() {
                    return pb_1.Message.getField(this, 2);
                }
                set old_bond_id(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get signer() {
                    return pb_1.Message.getField(this, 3);
                }
                set signer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgReAssociateRecords({});
                    if (data.new_bond_id != null) {
                        message.new_bond_id = data.new_bond_id;
                    }
                    if (data.old_bond_id != null) {
                        message.old_bond_id = data.old_bond_id;
                    }
                    if (data.signer != null) {
                        message.signer = data.signer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.new_bond_id != null) {
                        data.new_bond_id = this.new_bond_id;
                    }
                    if (this.old_bond_id != null) {
                        data.old_bond_id = this.old_bond_id;
                    }
                    if (this.signer != null) {
                        data.signer = this.signer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.new_bond_id === "string" && this.new_bond_id.length)
                        writer.writeString(1, this.new_bond_id);
                    if (typeof this.old_bond_id === "string" && this.old_bond_id.length)
                        writer.writeString(2, this.old_bond_id);
                    if (typeof this.signer === "string" && this.signer.length)
                        writer.writeString(3, this.signer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgReAssociateRecords();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.new_bond_id = reader.readString();
                                break;
                            case 2:
                                message.old_bond_id = reader.readString();
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
                    return MsgReAssociateRecords.deserialize(bytes);
                }
            }
            v1beta1.MsgReAssociateRecords = MsgReAssociateRecords;
            class MsgReAssociateRecordsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgReAssociateRecordsResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgReAssociateRecordsResponse();
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
                    return MsgReAssociateRecordsResponse.deserialize(bytes);
                }
            }
            v1beta1.MsgReAssociateRecordsResponse = MsgReAssociateRecordsResponse;
        })(v1beta1 = nameservice.v1beta1 || (nameservice.v1beta1 = {}));
    })(nameservice = vulcanize.nameservice || (vulcanize.nameservice = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
