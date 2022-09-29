import * as dependency_2 from "./bond";
import * as dependency_4 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_5 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.bond.v1beta1 {
    class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.bond.v1beta1.Params;
        });
        get params(): dependency_2.vulcanize.bond.v1beta1.Params;
        set params(value: dependency_2.vulcanize.bond.v1beta1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                max_bond_amount?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    class QueryGetBondsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryGetBondsRequest;
        toObject(): {
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsRequest;
    }
    class QueryGetBondsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bonds?: dependency_2.vulcanize.bond.v1beta1.Bond[];
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get bonds(): dependency_2.vulcanize.bond.v1beta1.Bond[];
        set bonds(value: dependency_2.vulcanize.bond.v1beta1.Bond[]);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGetBondsResponse;
        toObject(): {
            bonds?: {
                id?: string | undefined;
                owner?: string | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsResponse;
    }
    class QueryGetBondByIdRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        });
        get id(): string;
        set id(value: string);
        static fromObject(data: {
            id?: string;
        }): QueryGetBondByIdRequest;
        toObject(): {
            id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondByIdRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondByIdRequest;
    }
    class QueryGetBondByIdResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bond?: dependency_2.vulcanize.bond.v1beta1.Bond;
        });
        get bond(): dependency_2.vulcanize.bond.v1beta1.Bond;
        set bond(value: dependency_2.vulcanize.bond.v1beta1.Bond);
        static fromObject(data: {
            bond?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>;
        }): QueryGetBondByIdResponse;
        toObject(): {
            bond?: {
                id?: string | undefined;
                owner?: string | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondByIdResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondByIdResponse;
    }
    class QueryGetBondsByOwnerRequest extends pb_1.Message {
        constructor(data?: any[] | {
            owner?: string;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get owner(): string;
        set owner(value: string);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            owner?: string;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGetBondsByOwnerRequest;
        toObject(): {
            owner?: string | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsByOwnerRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsByOwnerRequest;
    }
    class QueryGetBondsByOwnerResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bonds?: dependency_2.vulcanize.bond.v1beta1.Bond[];
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get bonds(): dependency_2.vulcanize.bond.v1beta1.Bond[];
        set bonds(value: dependency_2.vulcanize.bond.v1beta1.Bond[]);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGetBondsByOwnerResponse;
        toObject(): {
            bonds?: {
                id?: string | undefined;
                owner?: string | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsByOwnerResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsByOwnerResponse;
    }
    class QueryGetBondModuleBalanceRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryGetBondModuleBalanceRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondModuleBalanceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondModuleBalanceRequest;
    }
    class QueryGetBondModuleBalanceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: dependency_5.cosmos.base.v1beta1.Coin[];
        });
        get balance(): dependency_5.cosmos.base.v1beta1.Coin[];
        set balance(value: dependency_5.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            balance?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): QueryGetBondModuleBalanceResponse;
        toObject(): {
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondModuleBalanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetBondModuleBalanceResponse;
    }
}
