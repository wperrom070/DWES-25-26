import { Type } from "class-transformer";
import { IsEmail, IsInt, IsOptional, IsString, Matches, ValidateNested } from "class-validator";
import { AddressDto } from "src/common/dto/address.dto";
import { Cliente } from "../entities/cliente.entity";
import { JoinColumn, OneToOne } from "typeorm";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";

export class CreateClienteDto {

    @IsOptional()
    @IsString()
    @Matches(/^\d{8}[A-Z]$/, {message: 'El nif no es correcto, 8 números y una letra mayúscula'})
    nif: string;

    //Edad esta comprendidad entre 18 y 58
    @IsInt({message: 'La edad es un entero'}) /* funcion externa que valida que es un número */
    @IsOptional()
    edad: number;

    @IsOptional()
    @IsString() /* funcion externa que valida que es un string */
    name: string;

    @IsEmail() /* funcion externa que valida que es un string */
    email: string;

    @IsOptional()
    comision: number;
/*
    @OneToOne (
        () => Usuario,
        (usuario)
    )
        @JoinColumn()
        cliente: Cliente
        /* => usuario.cliente  
    )
        cliente: Cliente
*/

    // @IsOptional()
    // @IsArray() /* funcion externa que valida que es un array */
    // @ArrayMinSize(2, {message: 'Debe tener al menos 2 teléfonos'})
    // @ArrayMaxSize(3, {message: 'Debe tener  3 teléfonos'})    
    // telefonos: string[];

   


    // @IsOptional()
    // @IsArray()
    // @ArrayMinSize(3, {message: 'Debe tener al menos 3 direcciones'})
    // @ValidateNested({each: true}) //valida cada uno de los elementos del array
    // @Type(() => AdressDTO) //indica el tipo de los elementos del array
    // direcciones: AdressDTO[]; //array de direcciones
   
    @ValidateNested() //valida cada uno de los elementos del array
    @Type(() => AddressDto) //indica el tipo de los elementos del array
    direccion: AddressDto
}