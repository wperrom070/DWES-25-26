//definir la estructura de datos de un objeeto usuario
//Interfaces --> a las estructuras de datos que se transmiten por la red
//types -->. para definir estructuras de datos internas o esquemas de datos
//dtos --> para validar estructuraas de datos que se reciben desde la red

export interface IAdress {
    calle: string;
    numero: string;
    ciudad: string;
    pais: string;
}
export interface IUser {
    username: string;
    password: string;
    email: string;
    foto: string;
    rol: string;
    cliente: {
        nombre: string;
        direccion: string;
        telefono: string;
    };
} 

export interface IRespUser {
    status: boolean;
    code: number;
    msg: string;
    data?: IUser;
}


type TUsers = {
    id: number;
    name: string;
    email: string;
}