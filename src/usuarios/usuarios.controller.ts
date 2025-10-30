import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('usuarios') /* tabla de mapeo ruta y controlador */

export class UsuariosController {
  //inyectar el servicio UsuariosService en UsuariosController
  //solo se inyectan clases con el decorador @Injectable
  //inyectar SERVICIO en CONTROLADOR
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get() /* endponit raiz -- home */
  getHome(){
    return 'home del seccion usuarios';
  }

  //devuelve todos los productos 
  // --> select * from productos
  @Get('all') /* endponit raiz */
  getAll(){
    return this.usuariosService.findAll();
  }

  //se le pasa el $id por Get y se devuelve ese producto (objeto)
  // ---> select * from productos where $id = productos.id
  @Get(':id')
  findOne(@Param ('id', new ParseUUIDPipe({version: '4'})) id: number){

    return this.usuariosService.findOne(id);

  }

  //Métodos ENDPOINT --> DECORADOR get, post, put, delete...
  @Post('new') /* endponit raiz */
  add(@Body() usuarioDTO: CreateUserDto){
    return this.usuariosService.new(usuarioDTO);
  }
  //metodo interno para borrar usuarios., NO ES ENDPOINT
  delete(){
    return 'borrado de usuarios'
  }
/*
  add(@Body() usuario: IUser){
    // ----- validar edad ----- 
    //variables bnadera
    let esNumber: Boolean = true; //supongo que no es un número
    let esmayor18: Boolean = true; //supongo que no es mayor de 18
    let esemilook: Boolean = true; //supongo que el email es correcto
    let msgerror: String[]=[];
    //extraer manualmente los datos del body (REQUEST) --> caso express ... 
    //debemos de VALIDARLO --> email este ok
    //usuario = peticion.body;
    console.log (usuario.email, usuario.edad);
    //mi controlador debe de validad los datos: edad > 18 y email correcto
    if (typeof usuario.edad !== 'number'){
      esNumber = false;
      msgerror.push("La edad debe ser un número ");
    }
    if (usuario.edad < 18){
      esmayor18 = false;
      msgerror.push("La edad debe ser mayor de 18");
    }
    if (!esNumber || !esmayor18){
      throw new BadRequestException({
        success: false,
        message: msgerror
      })
    }
    
    //---- validad email ----
    msgerror.push("El email no es correcto falta @");
    console.log('Usuario recibido', usuario);

  } */
}
 
/*add(@Body() usuario: IUsuario.IUser) { 
      // ----- validar edad -------
      // Variables bandera
     let esNumber: Boolean = true; // Supongo que no es un número
     let esmayor18: Boolean = true; // Supongo que no es mayor de 18
     let msgerror: string[] = [];
     // Extraer manualmente los datos del body (REQUEST) ---> caso express...
      // Debemos de Validarlo --> email este ok
      // usuario = peticion.body 
      console.log (usuario.email, usuario.edad);
      // Mi controlador debe de validar los datos: edad > 18 y email correcto
      if (typeof usuario.edad !== 'number'){
        esNumber = false;
        msgerror.push("La edad debe ser un número");
      }
      if (usuario.edad < 18){
        esmayor18 = false;
        msgerror.push("y la edad debe ser un número");
      }
          if(!esNumber || !esmayor18){
          throw new BadRequestException({
          success: false,
          message: msgerror
          })
          }
          // ----- validar email ----
          msgerror.push("El email no es correcto falta @");
      console.log('Usuario recibido',usuario);


     /* if (usuario.edad < 18){
        throw new BadRequestException({
          success: false,
          message: 'La edad debe ser un número mayor de 18'
        })    
      } */
      /* Extraer los datos del body (POST) o parámetros (GET) de mi REQUEST */
      //console.log(usuario);
      //return this.usuariosService.new(usuario);
  
  // Método interno para borrar usuarios. NO ES UN ENDPOINT */