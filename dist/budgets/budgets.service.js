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
exports.BudgetsService = void 0;
const common_1 = require("@nestjs/common");
const budget_entity_1 = require("./entities/budget.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BudgetsService = class BudgetsService {
    constructor(budgetsRepository) {
        this.budgetsRepository = budgetsRepository;
    }
    async findAll(options) {
        const take = options.take || 10;
        const skip = options.skip || 0;
        const [result, total] = await this.budgetsRepository.findAndCount({
            where: { IdBusiness: options.IdBusiness },
            order: { Name: "ASC" },
            take,
            skip
        });
        return {
            data: result,
            count: total
        };
    }
    async findBudget(budgetId) {
        return await this.budgetsRepository.findOne({ where: { Id: budgetId } });
    }
    createBudget(newBudget) {
        return this.budgetsRepository.save(newBudget);
    }
    async deleteBudget(budgetId) {
        return await this.budgetsRepository.delete({ Id: budgetId });
    }
    async updateBudget(budgetId, newBudget) {
        let toUpdate = await this.budgetsRepository.findOne({ where: { Id: budgetId } });
        let updated = Object.assign(toUpdate, newBudget);
        return this.budgetsRepository.save(updated);
    }
};
exports.BudgetsService = BudgetsService;
exports.BudgetsService = BudgetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budgets)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BudgetsService);
//# sourceMappingURL=budgets.service.js.map