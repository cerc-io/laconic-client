"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = exports.Signature = exports.Record = void 0;
const assert_1 = __importDefault(require("assert"));
const jsonschema_1 = require("jsonschema");
const record_json_1 = __importDefault(require("./schema/record.json"));
const util_1 = require("./util");
/**
 * Record.
 */
class Record {
    /**
     * New Record.
     */
    constructor(record) {
        (0, assert_1.default)(record);
        const validator = new jsonschema_1.Validator();
        const result = validator.validate(record, record_json_1.default);
        if (!result.valid) {
            result.errors.map(console.error);
            throw new Error('Invalid record input.');
        }
        this._record = record;
    }
    get attributes() {
        return Buffer.from(JSON.stringify(this._record), 'binary').toString('base64');
    }
    /**
     * Serialize record.
     */
    serialize() {
        return {
            'id': '_',
            'bond_id': '_',
            'create_time': '_',
            'expiry_time': '_',
            // Setting deleted as false (zero value) throws error in EIP712 signature verification.
            'deleted': true,
            'attributes': this.attributes,
        };
    }
    /**
     * Get message to calculate record signature.
     */
    getMessageToSign() {
        return util_1.Util.sortJSON(this._record);
    }
}
exports.Record = Record;
/**
 * Record Signature.
 */
class Signature {
    /**
     * New Signature.
     */
    constructor(pubKey, sig) {
        (0, assert_1.default)(pubKey);
        (0, assert_1.default)(sig);
        this._pubKey = pubKey;
        this._sig = sig;
    }
    /**
     * Serialize Signature.
     */
    serialize() {
        return util_1.Util.sortJSON({
            'pub_key': this._pubKey,
            'sig': this._sig
        });
    }
}
exports.Signature = Signature;
/**
 * Message Payload.
 */
class Payload {
    /**
     * New Payload.
     */
    constructor(record, ...signatures) {
        (0, assert_1.default)(record);
        this._record = record;
        this._signatures = signatures;
    }
    get record() {
        return this._record;
    }
    get signatures() {
        return this._signatures;
    }
    /**
     * Add message signature to payload.
     */
    addSignature(signature) {
        (0, assert_1.default)(signature);
        this._signatures.push(signature);
    }
    /**
     * Serialize Payload.
     */
    serialize() {
        // return Util.sortJSON({
        // });
        return {
            'record': this._record.serialize(),
            'signatures': this._signatures.map(s => s.serialize())
        };
    }
}
exports.Payload = Payload;
