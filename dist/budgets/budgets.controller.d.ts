import { BudgetsService } from './budgets.service';
import { BudgetDto } from './dto/budget.dto';
import { Budgets } from './entities/budget.entity';
export declare class BudgetsController {
    private budgetsService;
    constructor(budgetsService: BudgetsService);
    findAll(options: any): Promise<Budgets[]>;
    findBudget(budgetId: number): Promise<Budgets>;
    createBudget(newBudget: BudgetDto): Promise<Budgets>;
    deleteBudget(budgetId: number): Promise<Budgets>;
    editBudget(budgetId: number, newBudget: BudgetDto): Promise<Budgets>;
}
