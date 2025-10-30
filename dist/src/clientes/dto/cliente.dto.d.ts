import { AddressDto } from "src/common/dto/address.dto";
export declare class CreateClienteDto {
    nif: string;
    edad: number;
    name: string;
    email: string;
    comision: number;
    direccion: AddressDto;
}
