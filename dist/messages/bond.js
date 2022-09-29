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
exports.createTxMsgReAssociateRecords = exports.createTxMsgDissociateRecords = exports.createTxMsgDissociateBond = exports.createTxMsgAssociateBond = exports.createTxMsgCancelBond = exports.createTxMsgWithdrawBond = exports.createTxMsgRefillBond = exports.createTxMsgCreateBond = void 0;
const eip712_1 = require("@tharsis/eip712");
const bondTx = __importStar(require("../proto/vulcanize/bond/v1beta1/tx"));
const nameserviceTx = __importStar(require("../proto/vulcanize/nameservice/v1beta1/tx"));
const coin = __importStar(require("../proto/cosmos/base/v1beta1/coin"));
const util_1 = require("./util");
const MSG_CREATE_BOND_TYPES = {
    MsgValue: [
        { name: 'signer', type: 'string' },
        { name: 'coins', type: 'TypeCoins[]' },
    ],
    TypeCoins: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
    ],
};
const MSG_REFILL_BOND_TYPES = {
    MsgValue: [
        { name: 'id', type: 'string' },
        { name: 'signer', type: 'string' },
        { name: 'coins', type: 'TypeCoins[]' },
    ],
    TypeCoins: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
    ],
};
const MSG_WITHDRAW_BOND_TYPES = {
    MsgValue: [
        { name: 'id', type: 'string' },
        { name: 'signer', type: 'string' },
        { name: 'coins', type: 'TypeCoins[]' },
    ],
    TypeCoins: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
    ],
};
const MSG_CANCEL_BOND_TYPES = {
    MsgValue: [
        { name: 'id', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
const MSG_ASSOCIATE_BOND_TYPES = {
    MsgValue: [
        { name: 'record_id', type: 'string' },
        { name: 'bond_id', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
const MSG_DISSOCIATE_BOND_TYPES = {
    MsgValue: [
        { name: 'record_id', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
const MSG_DISSOCIATE_RECORDS_TYPES = {
    MsgValue: [
        { name: 'bond_id', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
const MSG_REASSOCIATE_RECORDS_TYPES = {
    MsgValue: [
        { name: 'new_bond_id', type: 'string' },
        { name: 'old_bond_id', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
function createTxMsgCreateBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_CREATE_BOND_TYPES);
    const msg = createMsgCreateBond(sender.accountAddress, params.amount, params.denom);
    const msgCosmos = protoCreateMsgCreateBond(sender.accountAddress, params.amount, params.denom);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgCreateBond = createTxMsgCreateBond;
function createTxMsgRefillBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_REFILL_BOND_TYPES);
    const msg = createMsgRefillBond(params.id, sender.accountAddress, params.amount, params.denom);
    const msgCosmos = protoCreateMsgRefillBond(params.id, sender.accountAddress, params.amount, params.denom);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgRefillBond = createTxMsgRefillBond;
function createTxMsgWithdrawBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_WITHDRAW_BOND_TYPES);
    const msg = createMsgWithdrawBond(params.id, sender.accountAddress, params.amount, params.denom);
    const msgCosmos = protoCreateMsgWithdrawBond(params.id, sender.accountAddress, params.amount, params.denom);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgWithdrawBond = createTxMsgWithdrawBond;
function createTxMsgCancelBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_CANCEL_BOND_TYPES);
    const msg = createMsgCancelBond(params.id, sender.accountAddress);
    const msgCosmos = protoCreateMsgCancelBond(params.id, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgCancelBond = createTxMsgCancelBond;
function createTxMsgAssociateBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_ASSOCIATE_BOND_TYPES);
    const msg = createMsgAssociateBond(params.recordId, params.bondId, sender.accountAddress);
    const msgCosmos = protoCreateMsgAssociateBond(params.recordId, params.bondId, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgAssociateBond = createTxMsgAssociateBond;
function createTxMsgDissociateBond(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_DISSOCIATE_BOND_TYPES);
    const msg = createMsgDissociateBond(params.recordId, sender.accountAddress);
    const msgCosmos = protoCreateMsgDissociateBond(params.recordId, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgDissociateBond = createTxMsgDissociateBond;
function createTxMsgDissociateRecords(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_DISSOCIATE_RECORDS_TYPES);
    const msg = createMsgDissociateRecords(params.bondId, sender.accountAddress);
    const msgCosmos = protoCreateMsgDissociateRecords(params.bondId, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgDissociateRecords = createTxMsgDissociateRecords;
function createTxMsgReAssociateRecords(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_REASSOCIATE_RECORDS_TYPES);
    const msg = createMsgReAssociateRecords(params.newBondId, params.oldBondId, sender.accountAddress);
    const msgCosmos = protoCreateMsgReAssociateRecords(params.newBondId, params.oldBondId, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgReAssociateRecords = createTxMsgReAssociateRecords;
function createMsgCreateBond(signer, amount, denom) {
    return {
        type: 'bond/MsgCreateBond',
        value: {
            coins: [
                {
                    amount,
                    denom,
                },
            ],
            signer
        },
    };
}
const protoCreateMsgCreateBond = (signer, amount, denom) => {
    const value = new coin.cosmos.base.v1beta1.Coin({
        denom,
        amount,
    });
    const createBondMessage = new bondTx.vulcanize.bond.v1beta1.MsgCreateBond({
        signer,
        coins: [value]
    });
    return {
        message: createBondMessage,
        path: 'vulcanize.bond.v1beta1.MsgCreateBond',
    };
};
function createMsgRefillBond(id, signer, amount, denom) {
    return {
        type: 'bond/MsgRefillBond',
        value: {
            coins: [
                {
                    amount,
                    denom,
                },
            ],
            id,
            signer
        },
    };
}
const protoCreateMsgRefillBond = (id, signer, amount, denom) => {
    const value = new coin.cosmos.base.v1beta1.Coin({
        denom,
        amount,
    });
    const refillBondMessage = new bondTx.vulcanize.bond.v1beta1.MsgRefillBond({
        id,
        signer,
        coins: [value]
    });
    return {
        message: refillBondMessage,
        path: 'vulcanize.bond.v1beta1.MsgRefillBond',
    };
};
function createMsgWithdrawBond(id, signer, amount, denom) {
    return {
        type: 'bond/MsgWithdrawBond',
        value: {
            id,
            coins: [
                {
                    amount,
                    denom,
                },
            ],
            signer
        },
    };
}
const protoCreateMsgWithdrawBond = (id, signer, amount, denom) => {
    const value = new coin.cosmos.base.v1beta1.Coin({
        denom,
        amount,
    });
    const withdrawBondMessage = new bondTx.vulcanize.bond.v1beta1.MsgWithdrawBond({
        id,
        signer,
        coins: [value]
    });
    return {
        message: withdrawBondMessage,
        path: 'vulcanize.bond.v1beta1.MsgWithdrawBond',
    };
};
function createMsgCancelBond(id, signer) {
    return {
        type: 'bond/MsgCancelBond',
        value: {
            id,
            signer
        },
    };
}
const protoCreateMsgCancelBond = (id, signer) => {
    const cancelBondMessage = new bondTx.vulcanize.bond.v1beta1.MsgCancelBond({
        id,
        signer
    });
    return {
        message: cancelBondMessage,
        path: 'vulcanize.bond.v1beta1.MsgCancelBond',
    };
};
function createMsgAssociateBond(recordId, bondId, signer) {
    return {
        type: 'nameservice/AssociateBond',
        value: {
            record_id: recordId,
            bond_id: bondId,
            signer
        },
    };
}
const protoCreateMsgAssociateBond = (recordId, bondId, signer) => {
    const associateBondMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgAssociateBond({
        record_id: recordId,
        bond_id: bondId,
        signer
    });
    return {
        message: associateBondMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgAssociateBond',
    };
};
function createMsgDissociateBond(recordId, signer) {
    return {
        type: 'nameservice/DissociateBond',
        value: {
            record_id: recordId,
            signer
        },
    };
}
const protoCreateMsgDissociateBond = (recordId, signer) => {
    const dissociateBondMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgDissociateBond({
        record_id: recordId,
        signer
    });
    return {
        message: dissociateBondMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgDissociateBond',
    };
};
function createMsgDissociateRecords(bondId, signer) {
    return {
        type: 'nameservice/DissociateRecords',
        value: {
            bond_id: bondId,
            signer
        },
    };
}
const protoCreateMsgDissociateRecords = (bondId, signer) => {
    const dissociateRecordsMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgDissociateRecords({
        bond_id: bondId,
        signer
    });
    return {
        message: dissociateRecordsMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgDissociateRecords',
    };
};
function createMsgReAssociateRecords(newBondId, oldBondId, signer) {
    return {
        type: 'nameservice/ReassociateRecords',
        value: {
            new_bond_id: newBondId,
            old_bond_id: oldBondId,
            signer
        },
    };
}
const protoCreateMsgReAssociateRecords = (newBondId, oldBondId, signer) => {
    const reAssociateRecordsMessage = new nameserviceTx.vulcanize.nameservice.v1beta1.MsgReAssociateRecords({
        new_bond_id: newBondId,
        old_bond_id: oldBondId,
        signer
    });
    return {
        message: reAssociateRecordsMessage,
        path: 'vulcanize.nameservice.v1beta1.MsgReAssociateRecords',
    };
};
