"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("./clients.service");
const clients_controller_1 = require("./clients.controller");
const auth_module_1 = require("../utilities/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("./entities/client.entity");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
let ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule;
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([client_entity_1.Clients, user_entity_1.Users]),
            auth_module_1.AuthModule
        ],
        controllers: [clients_controller_1.ClientsController],
        providers: [clients_service_1.ClientsService, auth_service_1.AuthService, jwt_1.JwtService, users_service_1.UsersService],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map