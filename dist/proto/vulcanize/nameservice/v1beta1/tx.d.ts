import * as dependency_2 from "./nameservice";
import * as pb_1 from "google-protobuf";
export declare namespace vulcanize.nameservice.v1beta1 {
    class MsgSetRecord extends pb_1.Message {
        constructor(data?: any[] | {
            bond_id?: string;
            signer?: string;
            payload?: Payload;
        });
        get bond_id(): string;
        set bond_id(value: string);
        get signer(): string;
        set signer(value: string);
        get payload(): Payload;
        set payload(value: Payload);
        static fromObject(data: {
            bond_id?: string;
            signer?: string;
            payload?: ReturnType<typeof Payload.prototype.toObject>;
        }): MsgSetRecord;
        toObject(): {
            bond_id?: string | undefined;
            signer?: string | undefined;
            payload?: {
                record?: {
                    id?: string | undefined;
                    bond_id?: string | undefined;
                    create_time?: string | undefined;
                    expiry_time?: string | undefined;
                    deleted?: boolean | undefined;
                    owners?: string[] | undefined;
                    attributes?: string | undefined;
                    names?: string[] | undefined;
                } | undefined;
                signatures?: {
                    sig?: string | undefined;
                    pub_key?: string | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetRecord;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetRecord;
    }
    class MsgSetRecordResponse extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        });
        get id(): string;
        set id(value: string);
        static fromObject(data: {
            id?: string;
        }): MsgSetRecordResponse;
        toObject(): {
            id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetRecordResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetRecordResponse;
    }
    class Payload extends pb_1.Message {
        constructor(data?: any[] | {
            record?: dependency_2.vulcanize.nameservice.v1beta1.Record;
            signatures?: dependency_2.vulcanize.nameservice.v1beta1.Signature[];
        });
        get record(): dependency_2.vulcanize.nameservice.v1beta1.Record;
        set record(value: dependency_2.vulcanize.nameservice.v1beta1.Record);
        get signatures(): dependency_2.vulcanize.nameservice.v1beta1.Signature[];
        set signatures(value: dependency_2.vulcanize.nameservice.v1beta1.Signature[]);
        static fromObject(data: {
            record?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.Record.prototype.toObject>;
            signatures?: ReturnType<typeof dependency_2.vulcanize.nameservice.v1beta1.Signature.prototype.toObject>[];
        }): Payload;
        toObject(): {
            record?: {
                id?: string | undefined;
                bond_id?: string | undefined;
                create_time?: string | undefined;
                expiry_time?: string | undefined;
                deleted?: boolean | undefined;
                owners?: string[] | undefined;
                attributes?: string | undefined;
                names?: string[] | undefined;
            } | undefined;
            signatures?: {
                sig?: string | undefined;
                pub_key?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Payload;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Payload;
    }
    class MsgSetName extends pb_1.Message {
        constructor(data?: any[] | {
            crn?: string;
            cid?: string;
            signer?: string;
        });
        get crn(): string;
        set crn(value: string);
        get cid(): string;
        set cid(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            crn?: string;
            cid?: string;
            signer?: string;
        }): MsgSetName;
        toObject(): {
            crn?: string | undefined;
            cid?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetName;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetName;
    }
    class MsgSetNameResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSetNameResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetNameResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetNameResponse;
    }
    class MsgReserveAuthority extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
            signer?: string;
            owner?: string;
        });
        get name(): string;
        set name(value: string);
        get signer(): string;
        set signer(value: string);
        get owner(): string;
        set owner(value: string);
        static fromObject(data: {
            name?: string;
            signer?: string;
            owner?: string;
        }): MsgReserveAuthority;
        toObject(): {
            name?: string | undefined;
            signer?: string | undefined;
            owner?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgReserveAuthority;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgReserveAuthority;
    }
    class MsgReserveAuthorityResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgReserveAuthorityResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgReserveAuthorityResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgReserveAuthorityResponse;
    }
    class MsgSetAuthorityBond extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
            bond_id?: string;
            signer?: string;
        });
        get name(): string;
        set name(value: string);
        get bond_id(): string;
        set bond_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            name?: string;
            bond_id?: string;
            signer?: string;
        }): MsgSetAuthorityBond;
        toObject(): {
            name?: string | undefined;
            bond_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetAuthorityBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetAuthorityBond;
    }
    class MsgSetAuthorityBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSetAuthorityBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetAuthorityBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetAuthorityBondResponse;
    }
    class MsgDeleteNameAuthority extends pb_1.Message {
        constructor(data?: any[] | {
            crn?: string;
            signer?: string;
        });
        get crn(): string;
        set crn(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            crn?: string;
            signer?: string;
        }): MsgDeleteNameAuthority;
        toObject(): {
            crn?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDeleteNameAuthority;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDeleteNameAuthority;
    }
    class MsgDeleteNameAuthorityResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgDeleteNameAuthorityResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDeleteNameAuthorityResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDeleteNameAuthorityResponse;
    }
    class MsgRenewRecord extends pb_1.Message {
        constructor(data?: any[] | {
            record_id?: string;
            signer?: string;
        });
        get record_id(): string;
        set record_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            record_id?: string;
            signer?: string;
        }): MsgRenewRecord;
        toObject(): {
            record_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRenewRecord;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRenewRecord;
    }
    class MsgRenewRecordResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRenewRecordResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRenewRecordResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRenewRecordResponse;
    }
    class MsgAssociateBond extends pb_1.Message {
        constructor(data?: any[] | {
            record_id?: string;
            bond_id?: string;
            signer?: string;
        });
        get record_id(): string;
        set record_id(value: string);
        get bond_id(): string;
        set bond_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            record_id?: string;
            bond_id?: string;
            signer?: string;
        }): MsgAssociateBond;
        toObject(): {
            record_id?: string | undefined;
            bond_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAssociateBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgAssociateBond;
    }
    class MsgAssociateBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgAssociateBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAssociateBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgAssociateBondResponse;
    }
    class MsgDissociateBond extends pb_1.Message {
        constructor(data?: any[] | {
            record_id?: string;
            signer?: string;
        });
        get record_id(): string;
        set record_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            record_id?: string;
            signer?: string;
        }): MsgDissociateBond;
        toObject(): {
            record_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDissociateBond;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDissociateBond;
    }
    class MsgDissociateBondResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgDissociateBondResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDissociateBondResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDissociateBondResponse;
    }
    class MsgDissociateRecords extends pb_1.Message {
        constructor(data?: any[] | {
            bond_id?: string;
            signer?: string;
        });
        get bond_id(): string;
        set bond_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            bond_id?: string;
            signer?: string;
        }): MsgDissociateRecords;
        toObject(): {
            bond_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDissociateRecords;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDissociateRecords;
    }
    class MsgDissociateRecordsResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgDissociateRecordsResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDissociateRecordsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDissociateRecordsResponse;
    }
    class MsgReAssociateRecords extends pb_1.Message {
        constructor(data?: any[] | {
            new_bond_id?: string;
            old_bond_id?: string;
            signer?: string;
        });
        get new_bond_id(): string;
        set new_bond_id(value: string);
        get old_bond_id(): string;
        set old_bond_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            new_bond_id?: string;
            old_bond_id?: string;
            signer?: string;
        }): MsgReAssociateRecords;
        toObject(): {
            new_bond_id?: string | undefined;
            old_bond_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgReAssociateRecords;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgReAssociateRecords;
    }
    class MsgReAssociateRecordsResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgReAssociateRecordsResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgReAssociateRecordsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgReAssociateRecordsResponse;
    }
}
