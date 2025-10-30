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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const lowdb_1 = require("lowdb");
const node_1 = require("lowdb/node");
let UsuariosService = class UsuariosService {
    constructor() {
        const adaptador = new node_1.JSONFile('common/db/db.json');
        this.db = new lowdb_1.Low(adaptador, { users: [] });
    }
    async findOne(id) {
        console.log(id);
        const data = await this.db.read();
        const usuario = this.db.data.users.find(usuario => usuario.id === parseInt(id));
        console.log(usuario);
        return usuario;
    }
    async findAll() {
        await this.db.read();
        return this.db.data.users;
    }
    async new(usuario) {
        console.log(usuario);
        await this.db.read();
        this.db.data.users.push(usuario);
        await this.db.write();
        return {
            status: true,
            code: 200,
            msg: 'Usuario creado',
            data: usuario
        };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map