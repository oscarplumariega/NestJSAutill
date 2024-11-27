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
const mailer_1 = require("@nestjs-modules/mailer");
let BudgetsService = class BudgetsService {
    constructor(budgetsRepository, mailService) {
        this.budgetsRepository = budgetsRepository;
        this.mailService = mailService;
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
        const take = options.take;
        const skip = options.skip;
        const filterObject = {};
        if (options.filters != null) {
            Object.entries(options.filters)
                .filter(([, value]) => value !== null)
                .forEach(([key, value]) => (filterObject[key] = value));
        }
        filterObject['IdBusiness'] = options.userId;
        if (filterObject['Name']) {
            filterObject['Name'] = (0, typeorm_2.ILike)('%' + filterObject['Name'] + '%');
        }
        const [result, total] = await this.budgetsRepository.findAndCount({
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
    async findBudget(budgetId) {
        return await this.budgetsRepository.findOne({ where: { Id: budgetId } });
    }
    async nextBudgetName(options) {
        const result = await this.budgetsRepository.findOne({
            where: { IdBusiness: options.userId },
            order: { Name: "DESC" }
        });
        let nextName = "-0000";
        if (result != null) {
            let name = result.Name;
            let last4 = parseInt(name.substring(name.length - 4));
            let nextNum = last4 + 1;
            if (nextNum.toString().length == 1) {
                nextName = "-000" + nextNum;
            }
            else if (nextNum.toString().length == 2) {
                nextName = "-00" + nextNum;
            }
            else if (nextNum.toString().length == 3) {
                nextName = "-0" + nextNum;
            }
            else if (nextNum.toString().length == 4) {
                nextName = "-" + nextNum;
            }
        }
        return { name: "Presupuesto" + nextName };
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
    sendEmail(options) {
        this.mailService.sendMail({
            from: `${options.from.FullName} <${options.from.Email}>`,
            to: `"${options.to.Email}, ${options.from.Email}"`,
            subject: `${options.mail.Name}`,
            text: 'Precio final ' + options.mail.Price,
            attachments: [
                {
                    filename: options.mail.Name + '.pdf',
                    path: `data:application/pdf;base64,${options.file.split('base64,')[1]}`,
                    encoding: 'base64'
                }
            ]
        });
    }
};
exports.BudgetsService = BudgetsService;
exports.BudgetsService = BudgetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budgets)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], BudgetsService);
//# sourceMappingURL=budgets.service.js.map