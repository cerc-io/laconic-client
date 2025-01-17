import {
  generateTypes,
} from '@tharsis/eip712'
import {
  Chain,
  Sender,
  Fee,
} from '@tharsis/transactions'

import * as registryTx from '../proto/vulcanize/registry/v1beta1/tx'
import * as registry from '../proto/vulcanize/registry/v1beta1/registry'
import { createTx } from './util'
import { Payload } from '../types'

const MSG_RESERVE_AUTHORITY_TYPES = {
  MsgValue: [
    { name: 'name', type: 'string' },
    { name: 'signer', type: 'string' },
    { name: 'owner', type: 'string' },
  ],
}

const MSG_SET_NAME_TYPES = {
  MsgValue: [
    { name: 'crn', type: 'string' },
    { name: 'cid', type: 'string' },
    { name: 'signer', type: 'string' },
  ],
}

const MSG_SET_RECORD_TYPES = {
  MsgValue: [
    { name: 'bond_id', type: 'string' },
    { name: 'signer', type: 'string' },
    { name: 'payload', type: 'TypePayload' },
  ],
  TypePayload: [
    { name: 'record', type: 'TypePayloadRecord' },
    { name: 'signatures', type: 'TypePayloadSignatures[]' },
  ],
  TypePayloadRecord: [
    { name: 'id', type: 'string' },
    { name: 'bond_id', type: 'string' },
    { name: 'create_time', type: 'string' },
    { name: 'expiry_time', type: 'string' },
    { name: 'deleted', type: 'bool' },
    { name: 'attributes', type: 'bytes' },
  ],
  TypePayloadSignatures: [
    { name: 'sig', type: 'string' },
    { name: 'pub_key', type: 'string' }
  ],
}

const MSG_SET_AUTHORITY_BOND_TYPES = {
  MsgValue: [
    { name: 'name', type: 'string' },
    { name: 'bond_id', type: 'string' },
    { name: 'signer', type: 'string' },
  ],
}

const MSG_DELETE_NAME_TYPES = {
  MsgValue: [
    { name: 'crn', type: 'string' },
    { name: 'signer', type: 'string' },
  ],
}

export const parseMsgSetRecordResponse = (data: string) => {
  const responseBytes = Buffer.from(data, 'hex')

  // TODO: Decode response using protobuf.
  // const msgSetRecordResponse = nameserviceTx.vulcanize.nameservice.v1beta1.MsgSetRecordResponse.deserialize(responseBytes);
  // return msgSetRecordResponse.toObject();

  // Workaround as proto based decoding is not working.
  const [_, id] = responseBytes.toString().split(';')

  return { id }
}

export const NAMESERVICE_ERRORS = [
  'Name already reserved',
  'Authority bond not found',
  'Name authority not found',
  'Access denied',
]

export interface MessageMsgReserveAuthority {
  name: string
  owner: string
}

export interface MessageMsgSetName {
  crn: string
  cid: string
}

export interface MessageMsgSetRecord {
  bondId: string
  payload: Payload
}

export interface MessageMsgSetAuthorityBond {
  name: string
  bondId: string
}

export interface MessageMsgDeleteName {
  crn: string
}

export function createTxMsgReserveAuthority(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgReserveAuthority,
) {
  const types = generateTypes(MSG_RESERVE_AUTHORITY_TYPES)

  const msg = createMsgReserveAuthority(
    params.name,
    sender.accountAddress,
    params.owner
  )

  const msgCosmos = protoCreateMsgReserveAuthority(
    params.name,
    sender.accountAddress,
    params.owner
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

export function createTxMsgSetName(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgSetName,
) {
  const types = generateTypes(MSG_SET_NAME_TYPES)

  const msg = createMsgSetName(
    params.crn,
    params.cid,
    sender.accountAddress
  )

  const msgCosmos = protoCreateMsgSetName(
    params.crn,
    params.cid,
    sender.accountAddress
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

export function createTxMsgSetRecord(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgSetRecord,
) {
  const types = generateTypes(MSG_SET_RECORD_TYPES)

  const msg = createMsgSetRecord(
    params.bondId,
    params.payload,
    sender.accountAddress
  )

  const msgCosmos = protoCreateMsgSetRecord(
    params.bondId,
    params.payload,
    sender.accountAddress
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

export function createTxMsgSetAuthorityBond(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgSetAuthorityBond,
) {
  const types = generateTypes(MSG_SET_AUTHORITY_BOND_TYPES)

  const msg = createMsgSetAuthorityBond(
    params.name,
    params.bondId,
    sender.accountAddress
  )

  const msgCosmos = protoCreateMsgSetAuthorityBond(
    params.name,
    params.bondId,
    sender.accountAddress
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

export function createTxMsgDeleteName(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgDeleteName,
) {
  const types = generateTypes(MSG_DELETE_NAME_TYPES)

  const msg = createMsgDeleteName(
    params.crn,
    sender.accountAddress
  )

  const msgCosmos = protoCreateMsgDeleteName(
    params.crn,
    sender.accountAddress
  )

  return createTx(chain, sender, fee, memo, types, msg, msgCosmos)
}

function createMsgReserveAuthority(
  name: string,
  signer: string,
  owner: string
) {
  return {
    type: 'registry/ReserveAuthority',
    value: {
      name,
      signer,
      owner
    },
  }
}

const protoCreateMsgReserveAuthority = (
  name: string,
  signer: string,
  owner: string,
) => {
  const reserveAuthorityMessage = new registryTx.vulcanize.registry.v1beta1.MsgReserveAuthority({
    name,
    signer,
    owner
  })

  return {
    message: reserveAuthorityMessage,
    path: 'vulcanize.registry.v1beta1.MsgReserveAuthority',
  }
}

function createMsgSetName(
  crn: string,
  cid: string,
  signer: string
) {
  return {
    type: 'registry/SetName',
    value: {
      crn,
      cid,
      signer
    },
  }
}

const protoCreateMsgSetName = (
  crn: string,
  cid: string,
  signer: string
) => {
  const setNameMessage = new registryTx.vulcanize.registry.v1beta1.MsgSetName({
    crn,
    cid,
    signer,
  })

  return {
    message: setNameMessage,
    path: 'vulcanize.registry.v1beta1.MsgSetName',
  }
}

function createMsgSetRecord(
  bondId: string,
  payload: Payload,
  signer: string
) {
  return {
    type: 'registry/SetRecord',
    value: {
      bond_id: bondId,
      signer,
      payload: payload.serialize()
    },
  }
}

const protoCreateMsgSetRecord = (
  bondId: string,
  payloadData: Payload,
  signer: string
) => {
  const record = new registry.vulcanize.registry.v1beta1.Record(payloadData.record.serialize())

  const signatures = payloadData.signatures.map(
    signature => new registry.vulcanize.registry.v1beta1.Signature(
      signature.serialize()
    )
  )

  const payload = new registryTx.vulcanize.registry.v1beta1.Payload({
    record,
    signatures
  })

  const setNameMessage = new registryTx.vulcanize.registry.v1beta1.MsgSetRecord({
    bond_id: bondId,
    signer,
    payload
  })

  return {
    message: setNameMessage,
    path: 'vulcanize.registry.v1beta1.MsgSetRecord',
  }
}

function createMsgSetAuthorityBond(
  name: string,
  bondId: string,
  signer: string
) {
  return {
    type: 'registry/SetAuthorityBond',
    value: {
      name,
      bond_id: bondId,
      signer
    },
  }
}

const protoCreateMsgSetAuthorityBond = (
  name: string,
  bondId: string,
  signer: string
) => {
  const setAuthorityBondMessage = new registryTx.vulcanize.registry.v1beta1.MsgSetAuthorityBond({
    name,
    bond_id: bondId,
    signer,
  })

  return {
    message: setAuthorityBondMessage,
    path: 'vulcanize.registry.v1beta1.MsgSetAuthorityBond',
  }
}

function createMsgDeleteName(
  crn: string,
  signer: string
) {
  return {
    type: 'registry/DeleteAuthority',
    value: {
      crn,
      signer
    },
  }
}

const protoCreateMsgDeleteName = (
  crn: string,
  signer: string
) => {
  const deleteNameAutorityMessage = new registryTx.vulcanize.registry.v1beta1.MsgDeleteNameAuthority({
    crn,
    signer,
  })

  return {
    message: deleteNameAutorityMessage,
    path: 'vulcanize.registry.v1beta1.MsgDeleteNameAuthority',
  }
}
