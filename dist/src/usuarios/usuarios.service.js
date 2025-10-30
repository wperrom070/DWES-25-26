"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuario_entity_js_1 = require("./entities/usuario.entity.js");
const typeorm_2 = require("@nestjs/typeorm");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async findOne(id) {
        console.log(id);
        return null;
    }
    async findAll() {
    }
    async new(usuariDTO) {
        const usuarioEntity = this.usuarioRepository.create(usuariDTO);
        await this.usuarioRepository.save(usuarioEntity);
        return {
            status: true,
            code: 200,
            msg: 'Usuario creado',
            data: usuarioEntity
        };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_js_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map