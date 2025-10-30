import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';
import { ClientesController } from './clientes.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity.js';


@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [ClientesService],
 // exports: [ClientesService], // opcional
})
export class ClientesModule {}