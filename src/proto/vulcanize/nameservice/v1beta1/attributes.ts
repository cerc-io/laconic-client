// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: vulcanize/nameservice/v1beta1/attributes.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace vulcanize.nameservice.v1beta1 {
    export class ServiceProviderRegistration extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bond_id?: string;
            laconic_id?: string;
            x500?: X500;
            type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bond_id" in data && data.bond_id != undefined) {
                    this.bond_id = data.bond_id;
                }
                if ("laconic_id" in data && data.laconic_id != undefined) {
                    this.laconic_id = data.laconic_id;
                }
                if ("x500" in data && data.x500 != undefined) {
                    this.x500 = data.x500;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
            }
        }
        get bond_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set bond_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get laconic_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set laconic_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get x500() {
            return pb_1.Message.getWrapperField(this, X500, 3) as X500;
        }
        set x500(value: X500) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_x500() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            bond_id?: string;
            laconic_id?: string;
            x500?: ReturnType<typeof X500.prototype.toObject>;
            type?: string;
        }): ServiceProviderRegistration {
            const message = new ServiceProviderRegistration({});
            if (data.bond_id != null) {
                message.bond_id = data.bond_id;
            }
            if (data.laconic_id != null) {
                message.laconic_id = data.laconic_id;
            }
            if (data.x500 != null) {
                message.x500 = X500.fromObject(data.x500);
            }
            if (data.type != null) {
                message.type = data.type;
            }
            return message;
        }
        toObject() {
            const data: {
                bond_id?: string;
                laconic_id?: string;
                x500?: ReturnType<typeof X500.prototype.toObject>;
                type?: string;
            } = {};
            if (this.bond_id != null) {
                data.bond_id = this.bond_id;
            }
            if (this.laconic_id != null) {
                data.laconic_id = this.laconic_id;
            }
            if (this.x500 != null) {
                data.x500 = this.x500.toObject();
            }
            if (this.type != null) {
                data.type = this.type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bond_id.length)
                writer.writeString(1, this.bond_id);
            if (this.laconic_id.length)
                writer.writeString(2, this.laconic_id);
            if (this.has_x500)
                writer.writeMessage(3, this.x500, () => this.x500.serialize(writer));
            if (this.type.length)
                writer.writeString(4, this.type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceProviderRegistration {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ServiceProviderRegistration();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.bond_id = reader.readString();
                        break;
                    case 2:
                        message.laconic_id = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.x500, () => message.x500 = X500.deserialize(reader));
                        break;
                    case 4:
                        message.type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ServiceProviderRegistration {
            return ServiceProviderRegistration.deserialize(bytes);
        }
    }
    export class X500 extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            common_name?: string;
            organization_unit?: string;
            organization_name?: string;
            locality_name?: string;
            state_name?: string;
            country?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("common_name" in data && data.common_name != undefined) {
                    this.common_name = data.common_name;
                }
                if ("organization_unit" in data && data.organization_unit != undefined) {
                    this.organization_unit = data.organization_unit;
                }
                if ("organization_name" in data && data.organization_name != undefined) {
                    this.organization_name = data.organization_name;
                }
                if ("locality_name" in data && data.locality_name != undefined) {
                    this.locality_name = data.locality_name;
                }
                if ("state_name" in data && data.state_name != undefined) {
                    this.state_name = data.state_name;
                }
                if ("country" in data && data.country != undefined) {
                    this.country = data.country;
                }
            }
        }
        get common_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set common_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get organization_unit() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set organization_unit(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get organization_name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set organization_name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get locality_name() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set locality_name(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get state_name() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set state_name(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get country() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set country(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            common_name?: string;
            organization_unit?: string;
            organization_name?: string;
            locality_name?: string;
            state_name?: string;
            country?: string;
        }): X500 {
            const message = new X500({});
            if (data.common_name != null) {
                message.common_name = data.common_name;
            }
            if (data.organization_unit != null) {
                message.organization_unit = data.organization_unit;
            }
            if (data.organization_name != null) {
                message.organization_name = data.organization_name;
            }
            if (data.locality_name != null) {
                message.locality_name = data.locality_name;
            }
            if (data.state_name != null) {
                message.state_name = data.state_name;
            }
            if (data.country != null) {
                message.country = data.country;
            }
            return message;
        }
        toObject() {
            const data: {
                common_name?: string;
                organization_unit?: string;
                organization_name?: string;
                locality_name?: string;
                state_name?: string;
                country?: string;
            } = {};
            if (this.common_name != null) {
                data.common_name = this.common_name;
            }
            if (this.organization_unit != null) {
                data.organization_unit = this.organization_unit;
            }
            if (this.organization_name != null) {
                data.organization_name = this.organization_name;
            }
            if (this.locality_name != null) {
                data.locality_name = this.locality_name;
            }
            if (this.state_name != null) {
                data.state_name = this.state_name;
            }
            if (this.country != null) {
                data.country = this.country;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.common_name.length)
                writer.writeString(1, this.common_name);
            if (this.organization_unit.length)
                writer.writeString(2, this.organization_unit);
            if (this.organization_name.length)
                writer.writeString(3, this.organization_name);
            if (this.locality_name.length)
                writer.writeString(4, this.locality_name);
            if (this.state_name.length)
                writer.writeString(5, this.state_name);
            if (this.country.length)
                writer.writeString(6, this.country);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): X500 {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new X500();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.common_name = reader.readString();
                        break;
                    case 2:
                        message.organization_unit = reader.readString();
                        break;
                    case 3:
                        message.organization_name = reader.readString();
                        break;
                    case 4:
                        message.locality_name = reader.readString();
                        break;
                    case 5:
                        message.state_name = reader.readString();
                        break;
                    case 6:
                        message.country = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): X500 {
            return X500.deserialize(bytes);
        }
    }
    export class WebsiteRegistrationRecord extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            url?: string;
            repo_registration_record_cid?: string;
            build_artifact_cid?: string;
            tls_cert_cid?: string;
            type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("url" in data && data.url != undefined) {
                    this.url = data.url;
                }
                if ("repo_registration_record_cid" in data && data.repo_registration_record_cid != undefined) {
                    this.repo_registration_record_cid = data.repo_registration_record_cid;
                }
                if ("build_artifact_cid" in data && data.build_artifact_cid != undefined) {
                    this.build_artifact_cid = data.build_artifact_cid;
                }
                if ("tls_cert_cid" in data && data.tls_cert_cid != undefined) {
                    this.tls_cert_cid = data.tls_cert_cid;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
            }
        }
        get url() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set url(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get repo_registration_record_cid() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set repo_registration_record_cid(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get build_artifact_cid() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set build_artifact_cid(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get tls_cert_cid() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set tls_cert_cid(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            url?: string;
            repo_registration_record_cid?: string;
            build_artifact_cid?: string;
            tls_cert_cid?: string;
            type?: string;
        }): WebsiteRegistrationRecord {
            const message = new WebsiteRegistrationRecord({});
            if (data.url != null) {
                message.url = data.url;
            }
            if (data.repo_registration_record_cid != null) {
                message.repo_registration_record_cid = data.repo_registration_record_cid;
            }
            if (data.build_artifact_cid != null) {
                message.build_artifact_cid = data.build_artifact_cid;
            }
            if (data.tls_cert_cid != null) {
                message.tls_cert_cid = data.tls_cert_cid;
            }
            if (data.type != null) {
                message.type = data.type;
            }
            return message;
        }
        toObject() {
            const data: {
                url?: string;
                repo_registration_record_cid?: string;
                build_artifact_cid?: string;
                tls_cert_cid?: string;
                type?: string;
            } = {};
            if (this.url != null) {
                data.url = this.url;
            }
            if (this.repo_registration_record_cid != null) {
                data.repo_registration_record_cid = this.repo_registration_record_cid;
            }
            if (this.build_artifact_cid != null) {
                data.build_artifact_cid = this.build_artifact_cid;
            }
            if (this.tls_cert_cid != null) {
                data.tls_cert_cid = this.tls_cert_cid;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.url.length)
                writer.writeString(1, this.url);
            if (this.repo_registration_record_cid.length)
                writer.writeString(2, this.repo_registration_record_cid);
            if (this.build_artifact_cid.length)
                writer.writeString(3, this.build_artifact_cid);
            if (this.tls_cert_cid.length)
                writer.writeString(4, this.tls_cert_cid);
            if (this.type.length)
                writer.writeString(5, this.type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebsiteRegistrationRecord {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WebsiteRegistrationRecord();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.url = reader.readString();
                        break;
                    case 2:
                        message.repo_registration_record_cid = reader.readString();
                        break;
                    case 3:
                        message.build_artifact_cid = reader.readString();
                        break;
                    case 4:
                        message.tls_cert_cid = reader.readString();
                        break;
                    case 5:
                        message.type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): WebsiteRegistrationRecord {
            return WebsiteRegistrationRecord.deserialize(bytes);
        }
    }
}
