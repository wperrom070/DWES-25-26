import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { ICliente } from './interfaces/ICliente';
export declare class ClientesService {
    private readonly clientesRepository;
    constructor(clientesRepository: Repository<Cliente>);
    new(cliente: ICliente): Promise<{
        status: boolean;
        code: number;
        msg: string;
        data: ICliente;
    }>;
}
