import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    add(clienteDTO: CreateClienteDto): void;
}
