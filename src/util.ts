import * as Block from 'multiformats/block'
import { sha256 as hasher } from 'multiformats/hashes/sha2'
import * as dagCBOR from '@ipld/dag-cbor'
import * as dagJSON from '@ipld/dag-json'

/**
 * Utils
 */
export class Util {
  /**
   * Sorts JSON object.
   */
  static sortJSON(obj: any) {
    if (obj instanceof Array) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = Util.sortJSON(obj[i]);
      }
      return obj;
    }
    if (typeof obj !== 'object' || obj === null) return obj;

    let keys = Object.keys(obj);
    keys = keys.sort();
    const newObject: {[key: string]: any} = {};

    for (let i = 0; i < keys.length; i++) {
      newObject[keys[i]] = Util.sortJSON(obj[keys[i]]);
    }
    return newObject;
  }

  /**
   * Marshal object into gql 'attributes' variable.
   */
  static toGQLAttributes(obj: any) {
    console.log("[DEBUG] toGQLAttributes", obj);
    const vars: any[] = [];
    Object.keys(obj).forEach(key => {
      vars.push({ key, value: this.toGQLValue(obj[key]) });
    });
    return vars;
  }

  static toGQLValue(obj: any) {
      if (obj === null) {
        return null;
      }
      let type: string = typeof obj;
      switch (type) {
        case 'number':
          type = (obj % 1 === 0) ? 'int' : 'float';
          return { [type]: obj };
        case 'string':
          return { 'string': obj };
        case 'boolean':
          return { 'boolean': obj };
        case 'object':
          if (obj['/'] !== undefined) {
            return { 'link': obj['/']  };
          }
          if (obj instanceof Array) {
            return { 'array': obj };
          }
          return { 'map': obj };
        default:
          throw new Error(`Unknown object type '${type}': ${obj}`);
      }
  }

  /**
   * Unmarshal attributes array to object.
   */
  static fromGQLAttributes(attributes: any[] = []) {
    const res: {[key: string]: any} = {};

    attributes.forEach(attr => {
      res[attr.key] = this.fromGQLValue(attr.value);
    });

    return res;
  }

  static fromGQLValue(obj: any) {
    const present = Object.keys(obj).find(k => obj[k] !== null);
    if (present === undefined) {
      throw new Error('Object has no non-null values');
    }
    return obj[present];
  }
    
  /**
   * Get record content ID.
   */
  static async getContentId(record: any) {
    const serialized = dagJSON.encode(record)
    const recordData = dagJSON.decode(serialized)

    const block = await Block.encode({
      value: recordData,
      codec: dagCBOR,
      hasher
    })

    return block.cid.toString();
  }
}
