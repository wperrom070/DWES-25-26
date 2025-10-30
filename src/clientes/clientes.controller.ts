import { Body, Controller, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/cliente.dto';

@Controller('clientes')
export class ClientesController {
  //controlador --> servicio (inyectar servicio)
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  add (@Body() clienteDTO: CreateClienteDto) {
    
  }
}




  /*@Get()
  getAll() {
    return this.clientesService.findAll();
  }


  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.clientesService.findOne(Number(id));
  }


  @Post()
  create(@Body('nombre') nombre: string) {
    return this.clientesService.create(nombre);
  }
}*/
