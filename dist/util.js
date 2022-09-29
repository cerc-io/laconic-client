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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const Block = __importStar(require("multiformats/block"));
const sha2_1 = require("multiformats/hashes/sha2");
const dagCBOR = __importStar(require("@ipld/dag-cbor"));
const dagJSON = __importStar(require("@ipld/dag-json"));
/**
 * Utils
 */
class Util {
    /**
     * Sorts JSON object.
     */
    static sortJSON(object) {
        if (object instanceof Array) {
            for (let i = 0; i < object.length; i++) {
                object[i] = Util.sortJSON(object[i]);
            }
            return object;
        }
        if (typeof object !== 'object' || object === null)
            return object;
        let keys = Object.keys(object);
        keys = keys.sort();
        const newObject = {};
        for (let i = 0; i < keys.length; i++) {
            newObject[keys[i]] = Util.sortJSON(object[keys[i]]);
        }
        return newObject;
    }
    /**
     * Marshal object into gql 'attributes' variable.
     */
    static toGQLAttributes(object) {
        const vars = [];
        Object.keys(object).forEach(key => {
            let type = typeof object[key];
            if (object[key] === null) {
                vars.push({ key, value: { 'null': true } });
            }
            else if (type === 'number') {
                type = (object[key] % 1 === 0) ? 'int' : 'float';
                vars.push({ key, value: { [type]: object[key] } });
            }
            else if (type === 'string') {
                vars.push({ key, value: { 'string': object[key] } });
            }
            else if (type === 'boolean') {
                vars.push({ key, value: { 'boolean': object[key] } });
            }
            else if (type === 'object') {
                const nestedObject = object[key];
                if (nestedObject['/'] !== undefined) {
                    vars.push({ key, value: { 'reference': { id: nestedObject['/'] } } });
                }
            }
        });
        return vars;
    }
    /**
     * Unmarshal attributes array to object.
     */
    static fromGQLAttributes(attributes = []) {
        const res = {};
        attributes.forEach(attr => {
            if (attr.value.null) {
                res[attr.key] = null;
            }
            else if (attr.value.json) {
                res[attr.key] = JSON.parse(attr.value.json);
            }
            else if (attr.value.reference) {
                // Convert GQL reference to IPLD style link.
                const ref = attr.value.reference;
                res[attr.key] = { '/': ref.id };
            }
            else {
                const _a = attr.value, { values, null: n } = _a, types = __rest(_a, ["values", "null"]);
                const value = Object.values(types).find(v => v !== null);
                res[attr.key] = value;
            }
        });
        return res;
    }
    /**
     * Get record content ID.
     */
    static getContentId(record) {
        return __awaiter(this, void 0, void 0, function* () {
            const serialized = dagJSON.encode(record);
            const recordData = dagJSON.decode(serialized);
            const block = yield Block.encode({
                value: recordData,
                codec: dagCBOR,
                hasher: sha2_1.sha256
            });
            return block.cid.toString();
        });
    }
}
exports.Util = Util;
