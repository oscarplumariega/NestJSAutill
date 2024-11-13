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
exports.BudgetsController = void 0;
const common_1 = require("@nestjs/common");
const budgets_service_1 = require("./budgets.service");
const budget_dto_1 = require("./dto/budget.dto");
let BudgetsController = class BudgetsController {
    constructor(budgetsService) {
        this.budgetsService = budgetsService;
    }
    findAll(options) {
        return this.budgetsService.findAll(options);
    }
    findBudget(budgetId) {
        return this.budgetsService.findBudget(budgetId);
    }
    nextName(options) {
        return this.budgetsService.nextBudgetName(options);
    }
    createBudget(newBudget) {
        return this.budgetsService.createBudget(newBudget);
    }
    deleteBudget(budgetId) {
        return this.budgetsService.deleteBudget(budgetId);
    }
    editBudget(budgetId, newBudget) {
        return this.budgetsService.updateBudget(budgetId, newBudget);
    }
};
exports.BudgetsController = BudgetsController;
__decorate([
    (0, common_1.Post)('getList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':budgetId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "findBudget", null);
__decorate([
    (0, common_1.Post)('/nextName'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "nextName", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budget_dto_1.BudgetDto]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "createBudget", null);
__decorate([
    (0, common_1.Delete)(':budgetId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "deleteBudget", null);
__decorate([
    (0, common_1.Put)(':budgetId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, budget_dto_1.BudgetDto]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "editBudget", null);
exports.BudgetsController = BudgetsController = __decorate([
    (0, common_1.Controller)('Budgets'),
    __metadata("design:paramtypes", [budgets_service_1.BudgetsService])
], BudgetsController);
//# sourceMappingURL=budgets.controller.js.map