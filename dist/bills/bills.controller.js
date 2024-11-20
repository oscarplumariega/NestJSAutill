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
exports.BillsController = void 0;
const common_1 = require("@nestjs/common");
const bills_service_1 = require("./bills.service");
const auth_guard_1 = require("../auth/auth.guard");
let BillsController = class BillsController {
    constructor(billsService) {
        this.billsService = billsService;
    }
    findAll(options) {
        return this.billsService.findAll(options);
    }
    create(id) {
        return this.billsService.create(id);
    }
    remove(billId) {
        return this.billsService.remove(billId);
    }
};
exports.BillsController = BillsController;
__decorate([
    (0, common_1.Post)('getList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('generateBill'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':billId'),
    __param(0, (0, common_1.Param)('billId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "remove", null);
exports.BillsController = BillsController = __decorate([
    (0, common_1.Controller)('Bills'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [bills_service_1.BillsService])
], BillsController);
//# sourceMappingURL=bills.controller.js.map