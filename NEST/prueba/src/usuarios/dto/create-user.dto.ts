import { IsNumber, IsString, Min, Max, IsInt, IsEmail, IsEmpty, IsNotEmpty, IsOptional, MinLength, MaxLength, IsArray, ArrayMinSize, ArrayMaxSize, Matches, IsIn, IsBoolean, IsUUID, ValidateNested } from "class-validator";
import { AdressDTO } from "./adrees.dto.js";
import { Type } from "class-transformer";

// Peticion a los roles que hay en la tabla de roles de la api
const roles: string[] = ['administrador', 'usuario', 'invitado'];

export class CreateUserDto {

    // @IsNumber() // Función externa que valida que es un número 
    @IsUUID() // Es un identificador unico universal 32 o 36 carácteres (-)
    id: number;
    // Edad esta comprendida entre 18 y 55
   // @IsNumber() // Función externa que valida que es un número 
    @IsInt({message: 'La edad es un entero'})
    @Min(18, {message: 'La edad minima es 18 años'})
    @Max(58, {message: 'La edad máxima es 58 años'})
    edad: number;

    @IsOptional() //@IsNotEmpty
    @IsString() // Función externa que valida que es un string
    @MinLength(5, { message: 'name: Mínimo 5 caracteres' })
    @MaxLength(8, {message: 'name: Máximo 8 caracteres'})
    name: string;

    @IsOptional() //@IsNotEmpty
    @IsEmail() // Función externa que valida que es un string
    email: string;

    @IsOptional() //@IsNotEmpty
    @IsArray() // Función externa que valida que es un array 
    @ArrayMinSize(2, {message: 'Debe tener al menos 2 teléfonos'})
    @ArrayMaxSize(3, {message: 'Debe tener max 3 teléfonos'})
    telefonos: string[];

    @IsOptional() //@IsNotEmpty
    @IsString()
    @Matches(/^\d{8}[A-Z]$/, {message: 'El nif no es correcto, 8 números y una letra mayúscula'})
    nif: string;

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes: ${roles}`})
    rol: string;

    @IsOptional() //@IsNotEmpty
    @IsBoolean()
    esdelMadrid: boolean; // true o false

    @IsOptional() //@IsNotEmpty
    @IsArray()
    @ArrayMinSize(3, {message: 'Debe tener al menos 3 direcciones'})
    @ValidateNested({each: true}) // Valida cada uno de los elementos del array
    @Type(() => AdressDTO) // Indica el tipo de los elementos del array 
    direcciones: AdressDTO[]; // array de direcciones 


}

function IsMinLength(arg0: number, arg1: { message: string; }): (target: CreateUserDto, propertyKey: "name") => void {
    throw new Error("Function not implemented.");
}
 