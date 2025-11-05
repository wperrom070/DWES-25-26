import { IAdress } from "src/common/interfaces/IAddres";
export interface ICliente {
    nif?: string;
    name: string;
    email: string;
    edad: number;
    comision: number;
    direccion: IAdress;
}
