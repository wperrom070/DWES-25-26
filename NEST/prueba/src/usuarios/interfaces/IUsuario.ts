// Definir la estrucura de datos de un objeto usuario
// Interfaces --> a las estructuras de datos que se transmiten por la red 
// Tipos --> para definir estructuras de datos internas o esquemas de datos
// Datos --> para validar estructuras de datos que se reciben desde la red
export interface IUser {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

type TUsers = {
    id: number;
    nombre: string;
    email: string;
}