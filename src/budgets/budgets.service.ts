import { Injectable } from '@nestjs/common';
import { BudgetDto } from './dto/budget.dto';
import { Budgets } from './entities/budget.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class BudgetsService {

    constructor(
        @InjectRepository(Budgets) private budgetsRepository: Repository<Budgets>,
        private readonly mailService: MailerService
    ) { }

    async findAll(options: any): Promise<any> {
        const take = options.take || 10
        const skip = options.skip || 0

        const filterObject = {};
        if (options.filters != null) {
            Object.entries(options.filters)
                .filter(([, value]) => value !== null)
                .forEach(([key, value]) => (filterObject[key] = value));
        }

        filterObject['IdBusiness'] = options.userId;

        const [result, total] = await this.budgetsRepository.findAndCount({
            where: filterObject,
            order: { Name: "ASC" },
            take,
            skip
        })

        let nfd = 1;
        if (result.length === 0 && options.filters != null) {
            nfd = 0;
        }

        return {
            data: result,
            count: total,
            noFilterData: nfd
        }
    }

    async findBudget(budgetId: number): Promise<Budgets> {
        return await this.budgetsRepository.findOne({ where: { Id: budgetId } });
    }

    async nextBudgetName(options): Promise<any> {
        const result = await this.budgetsRepository.findOne({
            where: { IdBusiness: options.userId },
            order: { Name: "DESC" }
        })

        let name = result.Name;
        let last4 = parseInt(name.substring(name.length - 4));
        let nextNum = last4 + 1;
        let nextName = "";

        if (nextNum.toString().length == 1) {
            nextName = "-000" + nextNum;
        } else if (nextNum.toString().length == 2) {
            nextName = "-00" + nextNum;
        } else if (nextNum.toString().length == 3) {
            nextName = "-0" + nextNum;
        }
        else if (nextNum.toString().length == 4) {
            nextName = "-" + nextNum;
        }

        return { name: "Presupuesto" + nextName };
    }

    createBudget(newBudget: BudgetDto) {
        return this.budgetsRepository.save(newBudget);
    }

    async deleteBudget(budgetId: number): Promise<any> {
        return await this.budgetsRepository.delete({ Id: budgetId });
    }

    async updateBudget(budgetId: number, newBudget: BudgetDto) {
        let toUpdate = await this.budgetsRepository.findOne({ where: { Id: budgetId } });

        let updated = Object.assign(toUpdate, newBudget);

        return this.budgetsRepository.save(updated);
    }

    sendEmail(options) {
        this.mailService.sendMail({
            from: `${options.from.FullName} <${options.from.Email}>`,
            to: `${options.to.Email}`,
            subject: `${options.mail.Name}`,
            text: 'Precio final ' + options.mail.Price,
        });
    }
}
