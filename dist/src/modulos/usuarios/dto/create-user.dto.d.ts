import { AddressDto } from "src/common/dto/address.dto";
export declare class CreateUserDto {
    id: string;
    edad: number;
    name: string;
    email: string;
    telefonos: string[];
    nif: string;
    rol: string;
    esdelMadrid: boolean;
    direccion: AddressDto;
}
