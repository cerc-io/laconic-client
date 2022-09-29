"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTx = void 0;
const eip712_1 = require("@tharsis/eip712");
const proto_1 = require("@tharsis/proto");
const createTx = (chain, sender, fee, memo, messageTypes, msg, msgCosmos) => {
    // EIP712
    const feeObject = (0, eip712_1.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
    const types = (0, eip712_1.generateTypes)(messageTypes);
    const messages = (0, eip712_1.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
    const eipToSign = (0, eip712_1.createEIP712)(types, chain.chainId, messages);
    // Cosmos
    const tx = (0, proto_1.createTransaction)(msgCosmos, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
    return {
        signDirect: tx.signDirect,
        legacyAmino: tx.legacyAmino,
        eipToSign,
    };
};
exports.createTx = createTx;
