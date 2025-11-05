import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
export declare class Usuario {
    id: string;
    username: string;
    password: string;
    email: string;
    foto: string;
    rol: string;
    cliente: Cliente;
    createdAt: Date;
    updatedAt: Date;
}
