import { IRespUser, IUser } from './interfaces/IUsuario.js';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity.js';
export declare class UsuariosService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    findOne(id: number): Promise<IUser>;
    findAll(): Promise<void>;
    new(usuariDTO: IUser): Promise<IRespUser>;
}
