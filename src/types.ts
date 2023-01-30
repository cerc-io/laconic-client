import assert from 'assert';
import { Validator } from 'jsonschema';

import RecordSchema from './schema/record.json';
import { Util } from './util';
import * as attributes from './proto/vulcanize/registry/v1beta1/attributes';
import * as any from './proto/google/protobuf/any';

/**
 * Record.
 */
export class Record {
  _record: any

  /**
   * New Record.
   */
  constructor(record: any) {
    assert(record);

    const validator = new Validator();
    const result = validator.validate(record, RecordSchema);
    if (!result.valid) {
      result.errors.map(console.error);
      throw new Error('Invalid record input.');
    }

    this._record = record;
  }

  get attributes() {

    var a = new any.google.protobuf.Any()

    switch (this._record.type){
      case "WebsiteRegistrationRecord": {
        var webAttr= new attributes.vulcanize.registry.v1beta1.WebsiteRegistrationRecord({
          url: this._record.url,
          repo_reference: new attributes.vulcanize.registry.v1beta1.HashReference(this._record.repo_reference),
          build_artifact_ref: new attributes.vulcanize.registry.v1beta1.HashReference(this._record.build_artifact_ref),
          tls_cert_ref:new attributes.vulcanize.registry.v1beta1.HashReference(this._record.tls_cert_ref),
          type: this._record.type,
          version:this._record.version,
        })
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.WebsiteRegistrationRecord",
          value: webAttr.serialize()
        })
      };
      break;

      case "ServiceProviderRecord": {
        var serAttr= new attributes.vulcanize.registry.v1beta1.ServiceProviderRecord({
          bond_id:this._record.bond_id,
          laconic_id:this._record.bond_id,
          type:this._record.type,
          version:this._record.version,
          x500: new attributes.vulcanize.registry.v1beta1.ServiceProviderRecord.X500(this._record.x500)
        })
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.ServiceProviderRecord",
          value: serAttr.serialize()
        })
      };
      break;
      
      case "GitRepository": {
        var gitAttr= new attributes.vulcanize.registry.v1beta1.GitRepository(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.GitRepository",
          value: gitAttr.serialize()
        })
      };
      break;

      case "Binary": {
        var binaryAttr= new attributes.vulcanize.registry.v1beta1.Binary(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.Binary",
          value: binaryAttr.serialize()
        })
      }
      case "DockerImage": {
        var dockerAttr= new attributes.vulcanize.registry.v1beta1.DockerImage(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.DockerImage",
          value: dockerAttr.serialize()
        })
      };
      break;

      case "WatcherRegistrationRecord": {
        var watcherAttr= new attributes.vulcanize.registry.v1beta1.WatcherRegistrationRecord(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.WatcherRegistrationRecord",
          value: watcherAttr.serialize()
        })
      };
      break;

      case "ResponderContract": {
        var respAttr= new attributes.vulcanize.registry.v1beta1.ResponderContract(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.ResponderContract",
          value: respAttr.serialize()
        })
      };
      break;

      case "JSPackage": {
        var jsAttr= new attributes.vulcanize.registry.v1beta1.JSPackage(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.JSPackage",
          value: jsAttr.serialize()
        })
      };
      break;

      case "ChainRegistrationRecord": {
        var chainAttr= new attributes.vulcanize.registry.v1beta1.ChainRegistrationRecord(this._record)
        a= new any.google.protobuf.Any({
          type_url: "/vulcanize.registry.v1beta1.ChainRegistrationRecord",
          value: chainAttr.serialize()
        })
      };
      break;

      default: 
    }
    return a
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
    }
  }

  /**
   * Get message to calculate record signature.
   */
  getMessageToSign() {
    return Util.sortJSON(this._record);
  }
}

/**
 * Record Signature.
 */
export class Signature {
  _pubKey: string
  _sig: string

  /**
   * New Signature.
   */
  constructor(pubKey: string, sig: string) {
    assert(pubKey);
    assert(sig);

    this._pubKey = pubKey;
    this._sig = sig;
  }

  /**
   * Serialize Signature.
   */
  serialize() {
    return Util.sortJSON({
      'pub_key': this._pubKey,
      'sig': this._sig
    });
  }
}

/**
 * Message Payload.
 */
export class Payload {
  _record: Record
  _signatures: Signature[]

  /**
   * New Payload.
   */
  constructor(record: Record, ...signatures: Signature[]) {
    assert(record);

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
  addSignature(signature: any) {
    assert(signature);

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
    }
  }
}
