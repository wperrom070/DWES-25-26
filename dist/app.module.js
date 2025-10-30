"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_js_1 = require("./app.controller.js");
const app_service_js_1 = require("./app.service.js");
const clientes_module_js_1 = require("./clientes/clientes.module.js");
const usuarios_module_js_1 = require("./usuarios/usuarios.module.js");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_js_1.UsuariosModule, clientes_module_js_1.ClientesModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                password: process.env.DB_PASSWORD,
                username: process.env.DB_USERNAME,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
            })
        ],
        controllers: [app_controller_js_1.AppController],
        providers: [app_service_js_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map