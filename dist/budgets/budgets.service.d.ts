import { BudgetDto } from './dto/budget.dto';
import { Budgets } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
export declare class BudgetsService {
    private budgetsRepository;
    private readonly mailService;
    constructor(budgetsRepository: Repository<Budgets>, mailService: MailerService);
    getPage(initialElement: any): {
        page: number;
        initialElement: number;
        finalElement: number;
    };
    findAll(options: any): Promise<any>;
    findBudget(budgetId: number): Promise<Budgets>;
    nextBudgetName(options: any): Promise<any>;
    createBudget(newBudget: BudgetDto): Promise<BudgetDto & Budgets>;
    deleteBudget(budgetId: number): Promise<any>;
    updateBudget(budgetId: number, newBudget: BudgetDto): Promise<Budgets & BudgetDto>;
    sendEmail(options: any): void;
}
