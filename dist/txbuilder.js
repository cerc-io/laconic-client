"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const assert_1 = __importDefault(require("assert"));
const transactions_1 = require("@tharsis/transactions");
/**
 * Generate a cosmos-sdk transaction.
 */
const createTransaction = (message, account, sender, chain) => {
    (0, assert_1.default)(message);
    (0, assert_1.default)(account);
    // Sign transaction.
    const signature = account.sign(message);
    let extension = (0, transactions_1.signatureToWeb3Extension)(chain, sender, signature);
    // Create the txRaw.
    return (0, transactions_1.createTxRawEIP712)(message.legacyAmino.body, message.legacyAmino.authInfo, extension);
};
exports.createTransaction = createTransaction;
