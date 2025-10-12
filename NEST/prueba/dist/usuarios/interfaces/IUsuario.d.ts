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
    telefonos?: string[];
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
