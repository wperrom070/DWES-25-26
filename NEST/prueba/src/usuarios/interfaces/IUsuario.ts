// Definir la estrucura de datos de un objeto usuario
// Interfaces --> a las estructuras de datos que se transmiten por la red 
// Tipos --> para definir estructuras de datos internas o esquemas de datos
// Datos --> para validar estructuras de datos que se reciben desde la red
export interface IAddress {
    calle: string;
    numero: string;
    ciudad: string;
    pais: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    edad: number;
    rol: string;
    telefonos?: string [];
    nif?: string;
    esdelMadrid?: boolean;
    direcciones?: IAddress[]; 
}

export interface IRespUser {
    status: boolean;
    code: number;
    msg: string;
    data: IUser;
}



type TUsers = {
    id: number;
    nombre: string;
    email: string;
}