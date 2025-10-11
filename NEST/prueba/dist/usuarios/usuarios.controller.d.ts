import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    getHome(): string;
    getAll(): Promise<any>;
    add(usuarioDTO: CreateUserDto): void;
    delete(): string;
}
