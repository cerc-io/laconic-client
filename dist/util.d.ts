/**
 * Utils
 */
export declare class Util {
    /**
     * Sorts JSON object.
     */
    static sortJSON(object: any): any;
    /**
     * Marshal object into gql 'attributes' variable.
     */
    static toGQLAttributes(object: any): any[];
    /**
     * Unmarshal attributes array to object.
     */
    static fromGQLAttributes(attributes?: any[]): {
        [key: string]: any;
    };
    /**
     * Get record content ID.
     */
    static getContentId(record: any): Promise<string>;
}
