import { Injectable } from '@nestjs/common';
import { BudgetDto } from './dto/budget.dto';
import { Budgets } from './entities/budget.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetsService {

    constructor(
        @InjectRepository(Budgets) private budgetsRepository: Repository<Budgets>, 
    ) {}
    
    async findAll(options: any): Promise<any> {
        const take = options.take || 10
        const skip = options.skip || 0

        const [result, total] = await this.budgetsRepository.findAndCount({
            where: {IdBusiness: options.IdBusiness},
            order: {Name: "ASC"},
            take,
            skip
        })
        return {
            data: result,
            count: total
        }
    }
    
    async findBudget(budgetId: number): Promise<Budgets> {
        return await this.budgetsRepository.findOne({ where: {Id: budgetId}});
    }

    createBudget(newBudget: BudgetDto){
        return this.budgetsRepository.save(newBudget);
    }

    async deleteBudget(budgetId: number): Promise<any>{
        return await this.budgetsRepository.delete({ Id: budgetId});
    }

    async updateBudget(budgetId: number, newBudget: BudgetDto){
        let toUpdate = await this.budgetsRepository.findOne({ where: {Id: budgetId}});

        let updated = Object.assign(toUpdate, newBudget);

        return this.budgetsRepository.save(updated);
    }
}
