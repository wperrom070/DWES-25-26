import { IRespUser, IUser } from './interfaces/IUsuario.js';
export declare class UsuariosService {
    private db;
    constructor();
    findOne(id: string): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    new(usuario: IUser): Promise<IRespUser>;
}
