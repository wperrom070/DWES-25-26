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
exports.Cliente = void 0;
const address_1 = require("../../common/entitties/address");
const typeorm_1 = require("typeorm");
let Cliente = class Cliente {
    CheckNif() {
        console.log('Antes nif de insertar el usuario en la BD');
        if (!this.nif.includes('-')) {
            const letra = this.nif.slice(-1).toUpperCase();
            const numeros = this.nif.slice(0, -1);
            this.nif = `${numeros}-${letra}`;
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
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Cliente.prototype, "nif", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 30 }),
    __metadata("design:type", String)
], Cliente.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 18 }),
    __metadata("design:type", Number)
], Cliente.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { default: 0.3 }),
    __metadata("design:type", Number)
], Cliente.prototype, "comision", void 0);
__decorate([
    (0, typeorm_1.Column)(() => address_1.Address, { prefix: '' }),
    __metadata("design:type", address_1.Address)
], Cliente.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Cliente.prototype, "CheckNif", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Cliente.prototype, "checkName", null);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)('cliente')
], Cliente);
//# sourceMappingURL=cliente.entity.js.map