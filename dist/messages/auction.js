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
exports.createTxMsgRevealBid = exports.createTxMsgCommitBid = void 0;
const eip712_1 = require("@tharsis/eip712");
const auctionTx = __importStar(require("../proto/vulcanize/auction/v1beta1/tx"));
const util_1 = require("./util");
const MSG_COMMIT_BID_TYPES = {
    MsgValue: [
        { name: 'auction_id', type: 'string' },
        { name: 'commit_hash', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
const MSG_REVEAL_BID_TYPES = {
    MsgValue: [
        { name: 'auction_id', type: 'string' },
        { name: 'reveal', type: 'string' },
        { name: 'signer', type: 'string' },
    ]
};
function createTxMsgCommitBid(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_COMMIT_BID_TYPES);
    const msg = createMsgCommitBid(params.auctionId, params.commitHash, sender.accountAddress);
    const msgCosmos = protoCreateMsgCommitBid(params.auctionId, params.commitHash, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgCommitBid = createTxMsgCommitBid;
function createTxMsgRevealBid(chain, sender, fee, memo, params) {
    const types = (0, eip712_1.generateTypes)(MSG_REVEAL_BID_TYPES);
    const msg = createMsgRevealBid(params.auctionId, params.reveal, sender.accountAddress);
    const msgCosmos = protoCreateMsgRevealBid(params.auctionId, params.reveal, sender.accountAddress);
    return (0, util_1.createTx)(chain, sender, fee, memo, types, msg, msgCosmos);
}
exports.createTxMsgRevealBid = createTxMsgRevealBid;
function createMsgCommitBid(auctionId, commitHash, signer) {
    return {
        type: 'auction/MsgCommitBid',
        value: {
            auction_id: auctionId,
            commit_hash: commitHash,
            signer,
        },
    };
}
const protoCreateMsgCommitBid = (auctionId, commitHash, signer) => {
    const commitBidMessage = new auctionTx.vulcanize.auction.v1beta1.MsgCommitBid({
        auction_id: auctionId,
        commit_hash: commitHash,
        signer,
    });
    return {
        message: commitBidMessage,
        path: 'vulcanize.auction.v1beta1.MsgCommitBid',
    };
};
function createMsgRevealBid(auctionId, reveal, signer) {
    return {
        type: 'auction/MsgRevealBid',
        value: {
            auction_id: auctionId,
            reveal,
            signer,
        },
    };
}
const protoCreateMsgRevealBid = (auctionId, reveal, signer) => {
    const revealBidMessage = new auctionTx.vulcanize.auction.v1beta1.MsgRevealBid({
        auction_id: auctionId,
        reveal,
        signer,
    });
    return {
        message: revealBidMessage,
        path: 'vulcanize.auction.v1beta1.MsgRevealBid',
    };
};
