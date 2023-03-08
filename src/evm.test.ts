import { ethers } from 'ethers';

import { Account } from './account';
import { Registry } from './index';
import { getConfig } from './testing/helper';
import { abi } from './artifacts/PhisherRegistry.json'

const { chainId, restEndpoint, gqlEndpoint, privateKey, fee } = getConfig();

jest.setTimeout(90 * 1000);

const CONTRACT_ADDRESS = "0xD035Adc6d41f9136C9C19434E0500F7706664e66"
const ETH_RPC_ENDPOINT = "http://localhost:8545"

const evmTests = () => {
  let registry: Registry;

  beforeAll(async () => {
    registry = new Registry(gqlEndpoint, restEndpoint, chainId);

  });

  test.only('Send eth tx for contract method.', async() => {
    // TODO: Refactor inside sendEthTx?
    const provider = new ethers.providers.JsonRpcProvider(ETH_RPC_ENDPOINT)
    const signer = new ethers.Wallet(privateKey, provider)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    
    const populatedTx = await contract.populateTransaction
      .claimIfPhisher('phisher1', true);
    
    const signerPopulatedTx = await signer.populateTransaction(populatedTx);
    const signedTxString = await signer.signTransaction(signerPopulatedTx);
    const tx = ethers.utils.parseTransaction(signedTxString);

    // TODO: Use laconicd queries in evm module
    tx.gasLimit = await provider.estimateGas(signerPopulatedTx);
    console.log('tx', tx)

    await registry.sendEthTx(
      {
        tx,
        from: signer.address
      },
      privateKey,
      fee
    );
  })
}

describe('evm', evmTests);
