import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';

import * as seedClientes from '../seed/data/clientes.json';
import { Cliente } from '../clientes/entities/cliente.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class SeedService {

  constructor(
    // En seedservice inyecto el servicio de cliente
    private readonly clientesService: ClientesService
  ){}

  loadData() {
    console.log('Cargando datos de prueba...');
    this.insertNewClientes();
    return {
      message: 'Data loaded successfully',
      data: seedClientes 
    }
  }

  private async insertNewClientes() {
    // Array para guardar las promesas de inserccion 
    const insertPromisesClientes = [];
    // Recorrer el array seed: Clientes para su insercción uno a uno en la BD
  seedClientes.forEach((cliente: any) => {
    // Se manda de forma ipsoFacta(1s) las 20 insercciones a la 80
    insertPromisesClientes.push(this.clientesService.new(cliente))
    console.log(cliente.apelllidos);

  })
  const results = await Promise.all(insertPromisesClientes);
}

}

/*
  findAll() {
    return `This action returns all seed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }

  update(id: number, updateSeedDto: UpdateSeedDto) {
    return `This action updates a #${id} seed`;
  }

  remove(id: number) {
    return `This action removes a #${id} seed`;
  }
}
*/