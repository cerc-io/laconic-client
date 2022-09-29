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
exports.createTxMsgDeleteName = exports.createTxMsgSetAuthorityBond = exports.createTxMsgSetRecord = exports.createTxMsgSetName = exports.createTxMsgReserveAuthority = exports.NAMESERVICE_ERRORS = exports.parseMsgSetRecordResponse = void 0;
const eip712_1 = require("@tharsis/eip712");
const nameserviceTx = __importStar(require("../proto/vulcanize/nameservice/v1beta1/tx"));
const nameservice = __importStar(require("../proto/vulcanize/nameservice/v1beta1/nameservice"));
const util_1 = require("./util");
const MSG_RESERVE_AUTHORITY_TYPES = {
    MsgValue: [
        { name: 'name', type: 'string' },
        { name: 'signer', type: 'string' },
        { name: 'owner', type: 'string' },
    ],
};
const MSG_SET_NAME_TYPES = {
    MsgValue: [
        { name: 'crn', type: 'string' },
        { name: 'cid', type: 'string' },
        { name: 'signer', type: 'string' },
    ],
};
const MSG_SET_RECORD_TYPES = {
    MsgValue: [
        { name: 'bond_id', type: 'string' },
        { name: 'signer', type: 'string' },
        { name: 'payload', type: 'TypePayload' },
    ],
    TypePayload: [
        { name: 'record', type: 'TypePayloadRecord' },
        { name: 'signatures', type: 'TypePayloadSignatures[]' },
    ],
    TypePayloadRecord: [
        { name: 'id', type: 'string' },
        { name: 'bond_id', type: 'string' },
        { name: 'create_time', type: 'string' },
        { name: 'expiry_time', type: 'string' },
        { name: 'deleted', type: 'bool' },
        { name: 'attributes', type: 'string' },
    ],
    TypePayloadSignatures: [
        { name: 'sig', type: 'string' },
        { name: 'pub_key', type: 'string' }
    ],
};
const MSG_SET_AUTHORITY_BOND_TYPES = {
    MsgValue: [
        { name: 'name', type: 'string' },
        { name: 'bond_id', type: 'string' },
        { name: 'signer', type: 'string' },
    ],
};
const MSG_DELETE_NAME_TYPES = {
    MsgValue: [
        { name: 'crn', type: 'string' },
        { name: 'signer', type: 'string' },
    ],
};
const parseMsgSetRecordResponse = (data) => {
    const responseBytes = Buffer.from(data, 'hex');
    // TODO: Decode response using protobuf.
    // const msgSetRecordResponse = nameserviceTx.vulcanize.nameservice.v1beta1.MsgSetRecordResponse.deserialize(responseBytes);
    // return msgSetRecordResponse.toObject();
    // Workaround as proto based decoding is not working.
    const [_, id] = responseBytes.toString().split(';');
    return { id };
};
exports.parseMsgSetRecordResponse = parseMsgSetRecordResponse;
exports.NAMESERVICE_ERRORS = [
    'Name already reserved.',
    'Authority bond not found.',
    'Name authority not found.',
    'Access denied.',
];
function createTxMsgReserveAuthority(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_RESERVE_AUTHORITY_TYPES);
    const msg = createMsgReserveAuthority(params.name, sender.accountAddress, params.owner);
    const msgCosmos = protoCreateMsgReserveAuthority(params.name, sender.accountAddress, params.owner);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgReserveAuthority = createTxMsgReserveAuthority;
function createTxMsgSetName(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_SET_NAME_TYPES);
    const msg = createMsgSetName(params.crn, params.cid, sender.accountAddress);
    const msgCosmos = protoCreateMsgSetName(params.crn, params.cid, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgSetName = createTxMsgSetName;
function createTxMsgSetRecord(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_SET_RECORD_TYPES);
    const msg = createMsgSetRecord(params.bondId, params.payload, sender.accountAddress);
    const msgCosmos = protoCreateMsgSetRecord(params.bondId, params.payload, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgSetRecord = createTxMsgSetRecord;
function createTxMsgSetAuthorityBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_SET_AUTHORITY_BOND_TYPES);
    const msg = createMsgSetAuthorityBond(params.name, params.bondId, sender.accountAddress);
    const msgCosmos = protoCreateMsgSetAuthorityBond(params.name, params.bondId, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgSetAuthorityBond = createTxMsgSetAuthorityBond;
function createTxMsgDeleteName(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_DELETE_NAME_TYPES);
    const msg = createMsgDeleteName(params.crn, sender.accountAddress);
    const msgCosmos = protoCreateMsgDeleteName(params.crn, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgDeleteName = createTxMsgDeleteName;
function createMsgReserveAuthority(name, signer, owner) {
    return {
        type: 'nameservice/ReserveAuthority',
        value: {
            name,
            signer,
            owner
        },
    };
}
const protoCreateMsgReserveAuthority = (name, signer, owner) => {
    const reserveAuthorityMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgReserveAuthority({
        name,
        signer,
        owner
    });
    return {
        message: reserveAuthorityMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgReserveAuthority',
    };
};
function createMsgSetName(crn, cid, signer) {
    return {
        type: 'nameservice/SetName',
        value: {
            crn,
            cid,
            signer
        },
    };
}
const protoCreateMsgSetName = (crn, cid, signer) => {
    const setNameMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgSetName({
        crn,
        cid,
        signer,
    });
    return {
        message: setNameMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgSetName',
    };
};
function createMsgSetRecord(bondId, payload, signer) {
    return {
        type: 'nameservice/SetRecord',
        value: {
            bond_id: bondId,
            signer,
            payload: payload.serialize()
        },
    };
}
const protoCreateMsgSetRecord = (bondId, payloadData, signer) => {
    const record = new nameservice.vulcanize.nameservice.v1beta1.Record(payloadData.record.serialize());
    const signatures = payloadData.signatures.map(signature => new nameservice.vulcanize.nameservice.v1beta1.Signature(signature.serialize()));
    const payload = new nameserviceTx.vulcanize.nameservice.v1beta1.Payload({
        record,
        signatures
    });
    const setNameMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgSetRecord({
        bond_id: bondId,
        signer,
        payload
    });
    return {
        message: setNameMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgSetRecord',
    };
};
function createMsgSetAuthorityBond(name, bondId, signer) {
    return {
        type: 'nameservice/SetAuthorityBond',
        value: {
            name,
            bond_id: bondId,
            signer
        },
    };
}
const protoCreateMsgSetAuthorityBond = (name, bondId, signer) => {
    const setAuthorityBondMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgSetAuthorityBond({
        name,
        bond_id: bondId,
        signer,
    });
    return {
        message: setAuthorityBondMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgSetAuthorityBond',
    };
};
function createMsgDeleteName(crn, signer) {
    return {
        type: 'nameservice/DeleteAuthority',
        value: {
            crn,
            signer
        },
    };
}
const protoCreateMsgDeleteName = (crn, signer) => {
    const deleteNameAutorityMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgDeleteNameAuthority({
        crn,
        signer,
    });
    return {
        message: deleteNameAutorityMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgDeleteNameAuthority',
    };
};
