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
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    checkNif() {
        console.log('Antes de insertar el usuario en la BD');
        if (!this.nif.includes('-')) {
            const numero = this.nif.slice(0, -1);
            const letra = this.nif.slice(-1);
            this.nif = `${numero}-${letra}`;
        }
    }
    checkName() {
        console.log('Antes de insertar el usuario en la BD');
        if (!this.name) {
            this.name = 'invitado';
        }
        this.name = this.name
            .replaceAll(' ', '_')
            .toUpperCase();
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Usuario.prototype, "nif", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 30 }),
    __metadata("design:type", String)
], Usuario.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 18 }),
    __metadata("design:type", Number)
], Usuario.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)(() => cliente_entity_1.Address, { prefix: "direccion" }),
    __metadata("design:type", cliente_entity_1.Address)
], Usuario.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "checkNif", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "checkName", null);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map