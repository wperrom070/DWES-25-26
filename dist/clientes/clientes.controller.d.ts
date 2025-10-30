import { ClientesService } from './clientes.service.js';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    getAll(): {
        id: number;
        nombre: string;
    }[];
    getOne(id: string): {
        id: number;
        nombre: string;
    };
    create(nombre: string): {
        id: number;
        nombre: string;
    };
}
