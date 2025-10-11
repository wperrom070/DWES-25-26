export declare class UsuariosService {
    private db;
    constructor();
    findAll(): Promise<any>;
    new(usuario: any): Promise<{
        msg: string;
        data: any;
    }>;
}
