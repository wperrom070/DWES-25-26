import { Address } from "src/common/entitties/address";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
export declare class Cliente {
    nif: string;
    nombre: string;
    apelllidos: string;
    edad: number;
    email: string;
    comision: number;
    address: Address;
    usuario: Usuario;
    CheckNif(): void;
    checkName(): void;
}
