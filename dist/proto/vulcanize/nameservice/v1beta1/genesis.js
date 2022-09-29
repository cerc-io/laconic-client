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
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                        if ("records" in data && data.records != undefined) {
                            this.records = data.records;
                        }
                        if ("authorities" in data && data.authorities != undefined) {
                            this.authorities = data.authorities;
                        }
                        if ("names" in data && data.names != undefined) {
                            this.names = data.names;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get records() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.Record, 2);
                }
                set records(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                get authorities() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry, 3);
                }
                set authorities(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                get names() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.nameservice.v1beta1.NameEntry, 4);
                }
                set names(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 4, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = dependency_2.vulcanize.nameservice.v1beta1.Params.fromObject(data.params);
                    }
                    if (data.records != null) {
                        message.records = data.records.map(item => dependency_2.vulcanize.nameservice.v1beta1.Record.fromObject(item));
                    }
                    if (data.authorities != null) {
                        message.authorities = data.authorities.map(item => dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry.fromObject(item));
                    }
                    if (data.names != null) {
                        message.names = data.names.map(item => dependency_2.vulcanize.nameservice.v1beta1.NameEntry.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.records != null) {
                        data.records = this.records.map((item) => item.toObject());
                    }
                    if (this.authorities != null) {
                        data.authorities = this.authorities.map((item) => item.toObject());
                    }
                    if (this.names != null) {
                        data.names = this.names.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.params !== undefined)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.records !== undefined)
                        writer.writeRepeatedMessage(2, this.records, (item) => item.serialize(writer));
                    if (this.authorities !== undefined)
                        writer.writeRepeatedMessage(3, this.authorities, (item) => item.serialize(writer));
                    if (this.names !== undefined)
                        writer.writeRepeatedMessage(4, this.names, (item) => item.serialize(writer));
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
                                reader.readMessage(message.params, () => message.params = dependency_2.vulcanize.nameservice.v1beta1.Params.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.records, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.vulcanize.nameservice.v1beta1.Record.deserialize(reader), dependency_2.vulcanize.nameservice.v1beta1.Record));
                                break;
                            case 3:
                                reader.readMessage(message.authorities, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry.deserialize(reader), dependency_2.vulcanize.nameservice.v1beta1.AuthorityEntry));
                                break;
                            case 4:
                                reader.readMessage(message.names, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.vulcanize.nameservice.v1beta1.NameEntry.deserialize(reader), dependency_2.vulcanize.nameservice.v1beta1.NameEntry));
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
        })(v1beta1 = nameservice.v1beta1 || (nameservice.v1beta1 = {}));
    })(nameservice = vulcanize.nameservice || (vulcanize.nameservice = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
