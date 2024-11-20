"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsModule = void 0;
const common_1 = require("@nestjs/common");
const budget_entity_1 = require("./entities/budget.entity");
const budgets_service_1 = require("./budgets.service");
const budgets_controller_1 = require("./budgets.controller");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../utilities/auth.module");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
let BudgetsModule = class BudgetsModule {
};
exports.BudgetsModule = BudgetsModule;
exports.BudgetsModule = BudgetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([budget_entity_1.Budgets, user_entity_1.Users]),
            auth_module_1.AuthModule
        ],
        providers: [budgets_service_1.BudgetsService, auth_service_1.AuthService, jwt_1.JwtService, users_service_1.UsersService],
        controllers: [budgets_controller_1.BudgetsController],
        exports: [budgets_service_1.BudgetsService]
    })
], BudgetsModule);
//# sourceMappingURL=budgets.module.js.map