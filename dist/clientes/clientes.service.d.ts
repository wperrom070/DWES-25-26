export declare class ClientesService {
    private clientes;
    findAll(): {
        id: number;
        nombre: string;
    }[];
    findOne(id: number): {
        id: number;
        nombre: string;
    };
    create(nombre: string): {
        id: number;
        nombre: string;
    };
}
