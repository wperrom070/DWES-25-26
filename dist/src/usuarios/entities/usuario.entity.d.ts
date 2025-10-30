import { Address } from "src/common/entitties/address";
export declare class Usuario {
    nif: string;
    id: string;
    name: string;
    edad: number;
    email: string;
    rol: string;
    direccion: Address;
    createdAt: Date;
    updatedAt: Date;
    CheckNif(): void;
    checkName(): void;
}
