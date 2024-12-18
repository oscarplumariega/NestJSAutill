"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsModule = void 0;
const common_1 = require("@nestjs/common");
const bills_service_1 = require("./bills.service");
const bills_controller_1 = require("./bills.controller");
const bill_entity_1 = require("./entities/bill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../utilities/auth.module");
const budgets_module_1 = require("../budgets/budgets.module");
const user_entity_1 = require("../users/entities/user.entity");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let BillsModule = class BillsModule {
};
exports.BillsModule = BillsModule;
exports.BillsModule = BillsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bill_entity_1.Bills, user_entity_1.Users]),
            auth_module_1.AuthModule,
            budgets_module_1.BudgetsModule
        ],
        controllers: [bills_controller_1.BillsController],
        providers: [bills_service_1.BillsService, auth_service_1.AuthService, jwt_1.JwtService, users_service_1.UsersService],
    })
], BillsModule);
//# sourceMappingURL=bills.module.js.map