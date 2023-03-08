import {
  generateTypes,
} from '@tharsis/eip712'
import {
  Chain,
  Sender,
  Fee,
} from '@tharsis/transactions'

import * as evmTx from '../proto/ethermint/evm/v1/tx'
import * as registry from '../proto/vulcanize/registry/v1beta1/registry'
import { EthereumTxData } from '../types'
import { createTx } from './util'

const MSG_ETHEREUM_TX_TYPES = {
  MsgValue: [
    { name: 'data', type: 'TypeData' },
    { name: 'hash', type: 'string' },
    { name: 'from', type: 'string' }
  ],
  TypeData: [
    { name: 'type_url', type: 'string' },
    { name: 'value', type: 'uint8[]' },
  ],
}

export interface MessageMsgEthereumTx {
  data: EthereumTxData,
  hash: string,
  from: string
}

export function createTxMsgEthereumTx(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgEthereumTx,
) {
  const types = generateTypes(MSG_ETHEREUM_TX_TYPES)

  const msg = createMsgEthereumTx(
    params.data,
    params.hash,
    params.from
  )

  const msgCosmos = protoCreateMsgEthereumTx(
    params.data,
    params.hash,
    params.from
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

function createMsgEthereumTx(
  data: EthereumTxData,
  hash: string,
  from: string
) {
  return {
    type: 'evm/EthereumTx',
    value: {
      data: data.serialize(),
      hash,
      from
    },
  }
}

const protoCreateMsgEthereumTx = (
  data: EthereumTxData,
  hash: string,
  from: string
) => {
  const ethereumTxMessage = new evmTx.ethermint.evm.v1.MsgEthereumTx({
    data: data.serialize(),
    hash,
    from,
  })

  return {
    message: ethereumTxMessage,
    path: 'ethermint.evm.v1.MsgEthereumTx',
  }
}
