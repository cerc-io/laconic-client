import assert from 'assert';
import axios from 'axios';
import graphqlClient from 'graphql.js'
import { generateEndpointAccount, generateEndpointBroadcast, generatePostBodyBroadcast } from '@tharsis/provider';

import { Util } from './util';

/**
 * Registry
 */
export class RegistryClient {
  _restEndpoint: string
  _graph: any

  /**
   * Get query result.
   */
   static async getResult(query: any, key: string, modifier?: (rows: any[]) => {}) {
    const result = await query;
    if (result && result[key] && result[key].length && result[key][0] !== null) {
      if (modifier) {
        return modifier(result[key]);
      }
      return result[key];
    }
    return [];
  }

  /**
   * New Client.
   */
  constructor(restEndpoint: string, gqlEndpoint: string) {
    assert(restEndpoint);

    this._restEndpoint = restEndpoint;

    this._graph = graphqlClient(gqlEndpoint, {
      method: 'POST',
      asJSON: true
    });
  }

  /**
   * Fetch Account.
   */
   async getAccount(address: string) {
    assert(address);

    let { data } = await axios.get(`${this._restEndpoint}${generateEndpointAccount(address)}`)

    return data
  }

  /**
   * Get bonds by ids.
   */
   async getBondsByIds(ids: string[]) {
    assert(ids);
    assert(ids.length);

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
  }

  /**
   * Get records by attributes.
   */
   async queryBonds(attributes = {}) {
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
      attributes: Util.toGQLAttributes(attributes)
    };

    return RegistryClient.getResult(this._graph(query)(variables), 'queryBonds');
  }

  /**
   * Submit transaction.
   */
   async submit(tx: string) {
    assert(tx);

    // Broadcast transaction.
    const { data } = await axios.post(
      `${this._restEndpoint}${generateEndpointBroadcast()}`,
      tx
    )

    return data;
  }
}