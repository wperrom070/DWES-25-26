import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsuariosModule, ClientesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

//  constructor( private readonly configService: ConfigService ) {  }

}