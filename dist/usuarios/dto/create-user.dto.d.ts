import { AdressDTO } from "./adrees.dto";
export declare class CreateUserDto {
    id: string;
    edad: number;
    name: string;
    email: string;
    telefonos: string[];
    nif: string;
    rol: string;
    esdelMadrid: boolean;
    direccion: AdressDTO;
}
