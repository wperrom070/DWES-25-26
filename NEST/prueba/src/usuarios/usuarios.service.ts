import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { IRespUser, IUser } from './interfaces/IUsuario.js';

type Data = { users: IUser[]}
@Injectable()
export class UsuariosService {
  private db: Low<Data>;
  constructor(){
    const adaptador = new JSONFile<Data>('common/db/db.json');
    this.db = new Low<Data>(adaptador, {users: [] } );
  }

  async findOne(id: string): Promise<IUser>{
    console.log(id)
    const data = await this.db.read(); // Se bloquea
    const usuario = this.db.data.users.find(usuario => usuario.id === parseInt(id));
    console.log(usuario)
    return usuario;
  }

  async findAll():Promise<IUser[]>{
    await this.db.read(); // Se bloquea
    return this.db.data.users; 
  }

  async new(usuario: IUser):Promise<IRespUser>{
    console.log(usuario)
    await this.db.read(); // Cargo la base de datos
    //const usuario = { id:3, name: "Claudia", correo: "claudia@gmail.com"}
    this.db.data.users.push(usuario); // Inserta en el array users
    await this.db.write(); // Escribe en el fichero
   /* this.db.write(); // Escribe en el fichero
    console.log(this.db.data.users);*/
    return {
      status: true,
      code: 200,
      msg: 'Usuario creado',
      data: usuario
    }
  }

}
