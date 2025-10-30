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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const address_dto_1 = require("../../common/dto/address.dto");
const roles = ['administrador', 'usuario', 'invitado'];
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'La edad es un entero' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(18, { message: 'La edad minima es 18 años' }),
    (0, class_validator_1.Max)(58, { message: 'La edad maxima es 58 años' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "edad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5, { message: 'namo: Minimo 5 caracteres' }),
    (0, class_validator_1.MaxLength)(8, { message: 'name: Maximo 8 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2, { message: 'Debe tener al menos 2 teléfonos' }),
    (0, class_validator_1.ArrayMaxSize)(3, { message: 'Debe tener  3 teléfonos' }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "telefonos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{8}[A-Z]$/, { message: 'El nif no es correcto, 8 números y una letra mayúscula' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nif", void 0);
__decorate([
    (0, class_validator_1.IsIn)(roles, { message: `El rol debe ser uno de los siguientes: ${roles}` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "esdelMadrid", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_dto_1.AddressDto),
    __metadata("design:type", address_dto_1.AddressDto)
], CreateUserDto.prototype, "direccion", void 0);
//# sourceMappingURL=create-user.dto.js.map