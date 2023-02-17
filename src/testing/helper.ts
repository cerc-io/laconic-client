import assert from 'assert';
import yaml from 'node-yaml';
import semver from 'semver';
import { Fee } from '@tharsis/transactions';

import { DEFAULT_CHAIN_ID, Registry } from '../index';

export const ensureUpdatedConfig = async (path: string) => {
  const conf = await yaml.read(path);
  conf.record.version = semver.inc(conf.record.version, 'patch');
  await yaml.write(path, conf);

  return conf;
};

export const getBaseConfig = async (path: string) => {
  const conf = await yaml.read(path);
  conf.record.version = '0.0.1';

  return conf;
};

/**
 * Provision a bond for record registration.
 */
export const provisionBondId = async (registry: Registry, privateKey: string, fee: Fee) => {
  let bonds = await registry.queryBonds();
  console.log("found bonds: " + bonds.length)
  if (!bonds.length) {
    await registry.createBond({ denom: 'aphoton', amount: '1000000000' }, privateKey, fee);
    bonds = await registry.queryBonds();
    console.log("created bond and got back: " + bonds.length)
  }

  return bonds[0].id;
};

export const getConfig = () => {
  assert(process.env.PRIVATE_KEY);

  return {
    chainId: process.env.COSMOS_CHAIN_ID || DEFAULT_CHAIN_ID,
    privateKey: process.env.PRIVATE_KEY,
    restEndpoint: process.env.LACONICD_REST_ENDPOINT || 'http://localhost:1317',
    gqlEndpoint: process.env.LACONICD_GQL_ENDPOINT || 'http://localhost:9473/api',
    fee: {
      amount: '40',
      denom: 'aphoton',
      gas: '400000',
    }
  }
};
