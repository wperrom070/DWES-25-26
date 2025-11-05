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
exports.Usuario = void 0;
const uuid_1 = require("uuid");
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 30 }),
    __metadata("design:type", String)
], Usuario.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 30 }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.usuario, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'cliente',
        foreignKeyConstraintName: 'fk_cliente_en_usuario'
    }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Usuario.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map