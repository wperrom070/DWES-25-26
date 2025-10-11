import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
//import { IUser } from './interfaces/IUsuario';
//mport { CreateUsuarioDto } from './dto/create-usuario.dto';
//import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios') /* tabla de mapeo ruta y controlador */
export class UsuariosController {
  // Inyectar el servicio UsuarioService en UsuariosController
  // Solo se inyectan clases con el decorador @injectable
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get() /* Endpoint raiz -- home */
  getHome() {
    return 'home del seccion usuarios'
  }

  @Get('all') /* Endpoint raiz */
  getAll() {
    return this.usuariosService.findAll();
  }

  // Métodos ENDPOINT --> DECORADOR get, post, put, delete...
   @Post('new') /* Endpoint raiz */
    add(@Body() usuarioDTO: CreateUserDto) { 
     
      console.log('Usuario recibido', usuarioDTO);


      //return this.usuariosService.new(usuario);
  
  // Método interno para borrar usuarios. NO ES UN ENDPOINT
        }
  delete(){
    return 'borrado de usuarios'
  }
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