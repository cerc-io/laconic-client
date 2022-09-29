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
            class Params extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("max_bond_amount" in data && data.max_bond_amount != undefined) {
                            this.max_bond_amount = data.max_bond_amount;
                        }
                    }
                }
                get max_bond_amount() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 1);
                }
                set max_bond_amount(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new Params({});
                    if (data.max_bond_amount != null) {
                        message.max_bond_amount = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.max_bond_amount);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.max_bond_amount != null) {
                        data.max_bond_amount = this.max_bond_amount.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.max_bond_amount !== undefined)
                        writer.writeMessage(1, this.max_bond_amount, () => this.max_bond_amount.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.max_bond_amount, () => message.max_bond_amount = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader));
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
                    return Params.deserialize(bytes);
                }
            }
            v1beta1.Params = Params;
            class Bond extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                        if ("owner" in data && data.owner != undefined) {
                            this.owner = data.owner;
                        }
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get owner() {
                    return pb_1.Message.getField(this, 2);
                }
                set owner(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get balance() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set balance(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new Bond({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    if (data.owner != null) {
                        message.owner = data.owner;
                    }
                    if (data.balance != null) {
                        message.balance = data.balance.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    if (this.owner != null) {
                        data.owner = this.owner;
                    }
                    if (this.balance != null) {
                        data.balance = this.balance.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (typeof this.owner === "string" && this.owner.length)
                        writer.writeString(2, this.owner);
                    if (this.balance !== undefined)
                        writer.writeRepeatedMessage(3, this.balance, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Bond();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
                                break;
                            case 2:
                                message.owner = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.balance, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
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
                    return Bond.deserialize(bytes);
                }
            }
            v1beta1.Bond = Bond;
        })(v1beta1 = bond.v1beta1 || (bond.v1beta1 = {}));
    })(bond = vulcanize.bond || (vulcanize.bond = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
