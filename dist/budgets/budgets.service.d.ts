import { BudgetDto } from './dto/budget.dto';
import { Budgets } from './entities/budget.entity';
import { Repository } from 'typeorm';
export declare class BudgetsService {
    private budgetsRepository;
    constructor(budgetsRepository: Repository<Budgets>);
    findAll(options: any): Promise<any>;
    findBudget(budgetId: number): Promise<Budgets>;
    createBudget(newBudget: BudgetDto): Promise<BudgetDto & Budgets>;
    deleteBudget(budgetId: number): Promise<any>;
    updateBudget(budgetId: number, newBudget: BudgetDto): Promise<Budgets & BudgetDto>;
}
