import { ClientesService } from '../clientes/clientes.service';
export declare class SeedService {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    loadData(): {
        message: string;
        data: {
            nif: string;
            nombre: string;
            apellidos: string;
            edad: number;
            comision: number;
            address: {
                pais: string;
                ciudad: string;
                provincia: string;
                calle: string;
                numero: string;
                cpostal: string;
            };
        }[];
    };
    private insertNewClientes;
}
