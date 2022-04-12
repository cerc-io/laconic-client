import assert from 'assert';
import yaml from 'node-yaml';
import semver from 'semver';

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

export const getConfig = () => {
  assert(process.env.PRIVATE_KEY);

  return {
    chainId: process.env.CHIBA_CLONK_CHAIN_ID || 'chibaclonk_9000-1',
    privateKey: process.env.PRIVATE_KEY,
    restEndpoint: process.env.CHIBA_CLONK_REST_ENDPOINT || 'http://localhost:1317',
    gqlEndpoint: process.env.CHIBA_CLONK_GQL_ENDPOINT || 'http://localhost:9473/api',
    fee: {
      amount: '20',
      denom: 'aphoton',
      gas: '200000',
    }
  }
};
