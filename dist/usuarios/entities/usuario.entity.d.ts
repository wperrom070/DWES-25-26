import { Address } from "src/clientes/entities/cliente.entity";
export declare class Usuario {
    nif: string;
    id: string;
    name: string;
    edad: number;
    email: string;
    rol: string;
    address: Address;
    createdAt: Date;
    updatedAt: Date;
    checkNif(): void;
    checkName(): void;
}
