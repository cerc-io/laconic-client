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
exports.RegistryClient = void 0;
const assert_1 = __importDefault(require("assert"));
const axios_1 = __importDefault(require("axios"));
const graphql_js_1 = __importDefault(require("graphql.js"));
const lodash_1 = require("lodash");
const provider_1 = require("@tharsis/provider");
const util_1 = require("./util");
const attributeField = `
  attributes {
    key
    value {
      null
      int
      float
      string
      boolean
      json
      reference {
        id
      }
    }
  }
`;
const refsField = `
  references {
    id
  }
`;
const historyFields = `
  history {
    id
    height
  }
`;
const auctionFields = `
  id
  status
  ownerAddress
  createTime
  commitsEndTime
  revealsEndTime
  commitFee {
    type
    quantity
  }
  revealFee {
    type
    quantity
  }
  minimumBid {
    type
    quantity
  }
  winnerAddress
  winnerBid {
    type
    quantity
  }
  winnerPrice {
    type
    quantity
  }
  bids {
    bidderAddress
    status
    commitHash
    commitTime
    revealTime
    commitFee {
      type
      quantity
    }
    revealFee {
      type
      quantity
    }
    bidAmount {
      type
      quantity
    }
  }
`;
/**
 * Registry
 */
class RegistryClient {
    /**
     * New Client.
     */
    constructor(restEndpoint, gqlEndpoint) {
        (0, assert_1.default)(restEndpoint);
        this._restEndpoint = restEndpoint;
        this._graph = (0, graphql_js_1.default)(gqlEndpoint, {
            method: 'POST',
            asJSON: true
        });
    }
    /**
     * Get query result.
     */
    static getResult(query, key, modifier) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield query;
            if (result && result[key] && result[key].length && result[key][0] !== null) {
                if (modifier) {
                    return modifier(result[key]);
                }
                return result[key];
            }
            return [];
        });
    }
    /**
     * Prepare response attributes.
     */
    static prepareAttributes(path) {
        return (rows) => {
            const result = rows.map(r => {
                (0, lodash_1.set)(r, path, util_1.Util.fromGQLAttributes((0, lodash_1.get)(r, path)));
                return r;
            });
            return result;
        };
    }
    /**
     * Get server status.
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `query {
      getStatus {
        version
        node {
          id
          network
          moniker
        }
        sync {
          latest_block_hash
          latest_block_height
          latest_block_time
          catching_up
        }
        validator {
          address
          voting_power
        }
        validators {
          address
          voting_power
          proposer_priority
        }
        num_peers
        peers {
          node {
            id
            network
            moniker
          }
          is_outbound
          remote_ip
        }
        disk_usage
      }
    }`;
            const { getStatus: status } = yield this._graph(query)();
            return status;
        });
    }
    /**
     * Fetch Accounts.
     */
    getAccounts(addresses) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(addresses);
            (0, assert_1.default)(addresses.length);
            const query = `query ($addresses: [String!]) {
      getAccounts(addresses: $addresses) {
        address
        pubKey
        number
        sequence
        balance {
          type
          quantity
        }
      }
    }`;
            const variables = {
                addresses
            };
            return RegistryClient.getResult(this._graph(query)(variables), 'getAccounts');
        });
    }
    /**
     * Get records by ids.
     */
    getRecordsByIds(ids, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(ids);
            (0, assert_1.default)(ids.length);
            const query = `query ($ids: [String!]) {
      getRecordsByIds(ids: $ids) {
        id
        names
        owners
        bondId
        createTime
        expiryTime
        ${attributeField}
        ${refs ? refsField : ''}
      }
    }`;
            const variables = {
                ids
            };
            return RegistryClient.getResult(this._graph(query)(variables), 'getRecordsByIds', RegistryClient.prepareAttributes('attributes'));
        });
    }
    /**
     * Get records by attributes.
     */
    queryRecords(attributes, all = false, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!attributes) {
                attributes = {};
            }
            const query = `query ($attributes: [KeyValueInput!], $all: Boolean) {
      queryRecords(attributes: $attributes, all: $all) {
        id
        names
        owners
        bondId
        createTime
        expiryTime
        ${attributeField}
        ${refs ? refsField : ''}
      }
    }`;
            const variables = {
                attributes: util_1.Util.toGQLAttributes(attributes),
                all
            };
            let result = (yield this._graph(query)(variables))['queryRecords'];
            result = RegistryClient.prepareAttributes('attributes')(result);
            return result;
        });
    }
    /**
     * Lookup authorities by names.
     */
    lookupAuthorities(names, auction = false) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(names.length);
            const query = `query ($names: [String!]) {
      lookupAuthorities(names: $names) {
        ownerAddress
        ownerPublicKey
        height
        status
        bondId
        expiryTime
        ${auction ? ('auction { ' + auctionFields + ' }') : ''}
      }
    }`;
            const variables = {
                names
            };
            const result = yield this._graph(query)(variables);
            return result['lookupAuthorities'];
        });
    }
    /**
     * Get auctions by ids.
     */
    getAuctionsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(ids);
            (0, assert_1.default)(ids.length);
            const query = `query ($ids: [String!]) {
      getAuctionsByIds(ids: $ids) {
        ${auctionFields}
      }
    }`;
            const variables = {
                ids
            };
            return RegistryClient.getResult(this._graph(query)(variables), 'getAuctionsByIds');
        });
    }
    /**
     * Lookup names.
     */
    lookupNames(names, history = false) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(names.length);
            const query = `query ($names: [String!]) {
      lookupNames(names: $names) {
        latest {
          id
          height
        }
        ${history ? historyFields : ''}
      }
    }`;
            const variables = {
                names
            };
            const result = yield this._graph(query)(variables);
            return result['lookupNames'];
        });
    }
    /**
     * Resolve names to records.
     */
    resolveNames(names, refs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(names.length);
            const query = `query ($names: [String!]) {
      resolveNames(names: $names) {
        id
        names
        owners
        bondId
        createTime
        expiryTime
        ${attributeField}
        ${refs ? refsField : ''}
      }
    }`;
            const variables = {
                names
            };
            let result = (yield this._graph(query)(variables))['resolveNames'];
            result = RegistryClient.prepareAttributes('attributes')(result);
            return result;
        });
    }
    /**
     * Get bonds by ids.
     */
    getBondsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(ids);
            (0, assert_1.default)(ids.length);
            const query = `query ($ids: [String!]) {
      getBondsByIds(ids: $ids) {
        id
        owner
        balance {
          type
          quantity
        }
      }
    }`;
            const variables = {
                ids
            };
            return RegistryClient.getResult(this._graph(query)(variables), 'getBondsByIds');
        });
    }
    /**
     * Get records by attributes.
     */
    queryBonds(attributes = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `query ($attributes: [KeyValueInput!]) {
      queryBonds(attributes: $attributes) {
        id
        owner
        balance {
          type
          quantity
        }
      }
    }`;
            const variables = {
                attributes: util_1.Util.toGQLAttributes(attributes)
            };
            return RegistryClient.getResult(this._graph(query)(variables), 'queryBonds');
        });
    }
    /**
     * Submit transaction.
     */
    submit(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(tx);
            // Broadcast transaction.
            const { data } = yield axios_1.default.post(`${this._restEndpoint}${(0, provider_1.generateEndpointBroadcast)()}`, tx);
            return data;
        });
    }
}
exports.RegistryClient = RegistryClient;
