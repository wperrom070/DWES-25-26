import { AdressDTO } from "./adrees.dto.js";
export declare class CreateUserDto {
    id: number;
    edad: number;
    name: string;
    email: string;
    telefonos: string[];
    nif: string;
    rol: string;
    esdelMadrid: boolean;
    direcciones: AdressDTO[];
}
