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
exports.BillsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bill_entity_1 = require("./entities/bill.entity");
const budgets_service_1 = require("../budgets/budgets.service");
let BillsService = class BillsService {
    constructor(billsRepository, budgetService) {
        this.billsRepository = billsRepository;
        this.budgetService = budgetService;
    }
    getPage(initialElement) {
        let PAGINATION = [
            { page: 1, initialElement: 0, finalElement: 10, },
            { page: 2, initialElement: 10, finalElement: 20 },
            { page: 3, initialElement: 20, finalElement: 30 },
            { page: 4, initialElement: 30, finalElement: 40 },
            { page: 5, initialElement: 40, finalElement: 50 },
            { page: 6, initialElement: 50, finalElement: 60 },
            { page: 7, initialElement: 60, finalElement: 70 },
            { page: 8, initialElement: 70, finalElement: 80 },
            { page: 9, initialElement: 80, finalElement: 90 },
            { page: 10, initialElement: 90, finalElement: 100 },
            { page: 11, initialElement: 100, finalElement: 110 },
            { page: 12, initialElement: 110, finalElement: 120 },
            { page: 13, initialElement: 120, finalElement: 130 },
            { page: 14, initialElement: 130, finalElement: 140 },
            { page: 15, initialElement: 140, finalElement: 150 }
        ];
        return PAGINATION[PAGINATION.map(e => e.initialElement).indexOf(initialElement)];
    }
    async findAll(options) {
        const take = options.take || 10;
        const skip = options.skip || 0;
        const filterObject = {};
        if (options.filters != null) {
            Object.entries(options.filters)
                .filter(([, value]) => value !== null)
                .forEach(([key, value]) => (filterObject[key] = value));
        }
        filterObject['IdBusiness'] = options.userId;
        const [result, total] = await this.billsRepository.findAndCount({
            where: filterObject,
            order: { Name: "ASC" },
            take,
            skip
        });
        let nfd = 1;
        if (result.length === 0 && options.filters != null) {
            nfd = 0;
        }
        return {
            data: result,
            count: total,
            noFilterData: nfd,
            page: this.getPage(options.skip)
        };
    }
    async create(body) {
        let budgetToClone;
        let budget = await this.budgetService.findBudget(body.id);
        budgetToClone = budget;
        budget.CloseIt = true;
        await this.budgetService.updateBudget(body.id, budget);
        budgetToClone.IdBudget = budget.Id;
        budgetToClone.Name = 'Factura-' + (budget.Name.substring(budget.Name.length - 4));
        return this.billsRepository.save(budgetToClone);
    }
    async remove(billId) {
        let bill = await this.billsRepository.findOne({ where: { Id: billId } });
        let budget = await this.budgetService.findBudget(bill.IdBudget);
        budget.CloseIt = false;
        await this.budgetService.updateBudget(budget.Id, budget);
        return await this.billsRepository.delete({ Id: billId });
    }
    async cashed(billId) {
        let bill = await this.billsRepository.findOne({ where: { Id: billId } });
        let uBill = bill;
        uBill.Cashed = true;
        let updated = Object.assign(bill, uBill);
        return await this.billsRepository.save(updated);
    }
};
exports.BillsService = BillsService;
exports.BillsService = BillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bill_entity_1.Bills)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        budgets_service_1.BudgetsService])
], BillsService);
//# sourceMappingURL=bills.service.js.map