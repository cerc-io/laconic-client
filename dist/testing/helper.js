"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.provisionBondId = exports.getBaseConfig = exports.ensureUpdatedConfig = void 0;
const assert_1 = __importDefault(require("assert"));
const node_yaml_1 = __importDefault(require("node-yaml"));
const semver_1 = __importDefault(require("semver"));
const ensureUpdatedConfig = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const conf = yield node_yaml_1.default.read(path);
    conf.record.version = semver_1.default.inc(conf.record.version, 'patch');
    yield node_yaml_1.default.write(path, conf);
    return conf;
});
exports.ensureUpdatedConfig = ensureUpdatedConfig;
const getBaseConfig = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const conf = yield node_yaml_1.default.read(path);
    conf.record.version = '0.0.1';
    return conf;
});
exports.getBaseConfig = getBaseConfig;
/**
 * Provision a bond for record registration.
 */
const provisionBondId = (registry, privateKey, fee) => __awaiter(void 0, void 0, void 0, function* () {
    let bonds = yield registry.queryBonds();
    if (!bonds.length) {
        yield registry.createBond({ denom: 'aphoton', amount: '1000000000' }, privateKey, fee);
        bonds = yield registry.queryBonds();
    }
    return bonds[0].id;
});
exports.provisionBondId = provisionBondId;
const getConfig = () => {
    (0, assert_1.default)(process.env.PRIVATE_KEY);
    return {
        chainId: process.env.COSMOS_CHAIN_ID || 'laconic_9000-1',
        privateKey: process.env.PRIVATE_KEY,
        restEndpoint: process.env.LACONICD_REST_ENDPOINT || 'http://localhost:1317',
        gqlEndpoint: process.env.LACONICD_GQL_ENDPOINT || 'http://localhost:9473/api',
        fee: {
            amount: '20',
            denom: 'aphoton',
            gas: '200000',
        }
    };
};
exports.getConfig = getConfig;
