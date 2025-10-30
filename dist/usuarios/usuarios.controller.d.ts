import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    getHome(): string;
    getAll(): Promise<void>;
    findOne(id: number): Promise<import("./interfaces/IUsuario.js").IUser>;
    add(usuarioDTO: CreateUserDto): Promise<import("./interfaces/IUsuario.js").IRespUser>;
    delete(): string;
}
