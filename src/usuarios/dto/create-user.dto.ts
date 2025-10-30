import { IsArray, IsNumber, IsInt, IsString, Min, Max, IsEmail, IsEmpty, IsNotEmpty, 
    IsOptional, MinLength, MaxLength, IsAlpha, 
    ArrayMinSize, ArrayMaxSize, Matches, 
    IsIn,
    IsBoolean,
    IsUUID,
    ValidateNested} from "class-validator";


import { Type } from "class-transformer";
import { AddressDto } from "src/common/dto/address.dto";
//peticion a los roles que hay en la tabla de roles de la api
const roles: string[] = ['administrador', 'usuario', 'invitado'];

export class CreateUserDto {

   // @IsNumber() /* funcion externa que valida que es un número */
    @IsString() //ES UN IDENTIFICADOR UNICO UNIVERSAL 32 o 36 caracteres (-)
    id: string;
   
    //Edad esta comprendidad entre 18 y 58
    @IsInt({message: 'La edad es un entero'}) /* funcion externa que valida que es un número */
    @IsOptional()
    @Min(18, {message: 'La edad minima es 18 años'})
    @Max(58, {message: 'La edad maxima es 58 años'})
    edad: number;

    @IsOptional()
    @IsString() /* funcion externa que valida que es un string */
    @MinLength(5, {message: 'namo: Minimo 5 caracteres'})
    @MaxLength(8, {message: 'name: Maximo 8 caracteres'})
    name: string;

    @IsEmail() /* funcion externa que valida que es un string */
    email: string;

    @IsOptional()
    @IsArray() /* funcion externa que valida que es un array */
    @ArrayMinSize(2, {message: 'Debe tener al menos 2 teléfonos'})
    @ArrayMaxSize(3, {message: 'Debe tener  3 teléfonos'})    
    telefonos: string[];

    @IsOptional()
    @IsString()
    @Matches(/^\d{8}[A-Z]$/, {message: 'El nif no es correcto, 8 números y una letra mayúscula'})
    nif: string;

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes: ${roles}`})
    rol: string;

    @IsOptional()
    @IsBoolean()
    esdelMadrid: boolean; //true o false

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