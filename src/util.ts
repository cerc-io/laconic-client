import * as Block from 'multiformats/block'
import { sha256 as hasher } from 'multiformats/hashes/sha2'
import * as dagCBOR from '@ipld/dag-cbor'
import * as dagJSON from '@ipld/dag-json'
//import { CID } from 'multiformats/cid'
//import * as json from 'multiformats/codecs/json'

/**
 * Utils
 */
export class Util {
  /**
   * Sorts JSON object.
   */
  static sortJSON(object: any) {
    if (object instanceof Array) {
      for (let i = 0; i < object.length; i++) {
        object[i] = Util.sortJSON(object[i]);
      }
      return object;
    }
    if (typeof object !== 'object' || object === null) return object;

    let keys = Object.keys(object);
    keys = keys.sort();
    const newObject: {[key: string]: any} = {};

    for (let i = 0; i < keys.length; i++) {
      newObject[keys[i]] = Util.sortJSON(object[keys[i]]);
    }
    return newObject;
  }

  /**
   * Marshal object into gql 'attributes' variable.
   */
  static toGQLAttributes(object: any) {
    const vars: any[] = [];

    Object.keys(object).forEach(key => {
      let type: string = typeof object[key];
      if (object[key] === null) {
        vars.push({ key, value: { 'null': true } });
      } else if (type === 'number') {
        type = (object[key] % 1 === 0) ? 'int' : 'float';
        vars.push({ key, value: { [type]: object[key] } });
      } else if (type === 'string') {
        vars.push({ key, value: { 'string': object[key] } });
      } else if (type === 'boolean') {
        vars.push({ key, value: { 'boolean': object[key] } });
      } else if (type === 'object') {
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
  static fromGQLAttributes(attributes: any[] = []) {
    const res: {[key: string]: any} = {};

    attributes.forEach(attr => {
      if (attr.value.null) {
        res[attr.key] = null;
      } else if (attr.value.json) {
        res[attr.key] = JSON.parse(attr.value.json);
      } else if (attr.value.reference) {
        // Convert GQL reference to IPLD style link.
        const ref = attr.value.reference;
        res[attr.key] = { '/': ref.id };
      } else {
        const { values, null: n, ...types } = attr.value;
        const value = Object.values(types).find(v => v !== null);
        res[attr.key] = value;
      }
    });

    return res;
  }

  /**
   * Get record content ID.
   */
  static async getContentId(record: any) {
    //this encode/decode does nothing, afaict
    const serialized = dagJSON.encode(record)
    const recordData = dagJSON.decode(serialized)
    //these are for version 0.0.1 of watcher.yml test data:
    //const dside = {"build_artifact_cid":"QmP8jTG1m9GSDJLCbeWhVSVgEzCPPwXRdCRuJtQ5Tz9Kc9","repo_registration_record_cid":"QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D","tls_cert_cid":"QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR","type":"WebsiteRegistrationRecord","url":"https://cerc.io","version":"0.0.1"}
    //bafyreiek4hnoqmits66bjyxswapplweuoqe4en2ux6u772o4y3askpd3ny is the CBOR encoding w/ sha 256 hasher
    //bafyreifalhff7dp6o4hd573b5zdbbnl2wml5q2nrms474lrzp7dgptwxkm is expected DAG-CBOR w/ sha 256 hasher
    //bafyreihpfkdvib5muloxlj5b3tgdwibjdcu3zdsuhyft33z7gtgnlzlkpm is CBOR??? encoding of empty json payload.
    const block = await Block.encode({
      value: recordData,
      codec: dagCBOR,
      hasher
    })

    //manual CID construction
    //const dbytes = dagCBOR.encode(dside)
    //console.log("BYTES: "  + dbytes)
    //const hash = await hasher.digest(dbytes)
    //console.log("HASH: " + hash)
    //const cid = CID.create(1, dagCBOR.code, hash)

    //console.log("TEST CID: " + cid.toString())

    return block.cid.toString();
  }
}
