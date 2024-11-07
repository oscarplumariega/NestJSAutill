import { BudgetsService } from './budgets.service';
import { BudgetDto } from './budget.dto';
import { Budgets } from './budget.entity';
export declare class BudgetsController {
    private budgetsService;
    constructor(budgetsService: BudgetsService);
    findAll(options: any): Promise<Budgets[]>;
    findBudget(budgetId: number): Promise<Budgets>;
    createBook(newBudget: BudgetDto): Promise<Budgets>;
    deleteBook(budgetId: number): Promise<Budgets>;
    editBudget(budgetId: number, newBudget: BudgetDto): Promise<Budgets>;
}
