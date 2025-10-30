import { Address } from "src/common/entitties/address";
export declare class Cliente {
    nif: string;
    name: string;
    edad: number;
    email: string;
    comision: number;
    address: Address;
    CheckNif(): void;
    checkName(): void;
}
