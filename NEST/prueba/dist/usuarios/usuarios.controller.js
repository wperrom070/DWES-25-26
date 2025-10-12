var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
let UsuariosController = class UsuariosController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    getHome() {
        return 'home del seccion usuarios';
    }
    getAll() {
        return this.usuariosService.findAll();
    }
    findOne(id) {
        console.log(id);
        const id1 = +id;
        console.log(id1);
        return this.usuariosService.findOne(id);
    }
    add(usuarioDTO) {
        console.log('Usuario recibido', usuarioDTO);
        return this.usuariosService.new(usuarioDTO);
    }
    delete() {
        return 'borrado de usuarios';
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "getHome", null);
__decorate([
    Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "getAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findOne", null);
__decorate([
    Post('new'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "add", null);
UsuariosController = __decorate([
    Controller('usuarios'),
    __metadata("design:paramtypes", [UsuariosService])
], UsuariosController);
export { UsuariosController };
//# sourceMappingURL=usuarios.controller.js.map