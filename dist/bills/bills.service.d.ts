import { Repository } from 'typeorm';
import { Bills } from './entities/bill.entity';
import { BudgetsService } from 'src/budgets/budgets.service';
export declare class BillsService {
    private billsRepository;
    private budgetService;
    constructor(billsRepository: Repository<Bills>, budgetService: BudgetsService);
    findAll(options: any): Promise<any>;
    create(body: any): Promise<any>;
    remove(billId: number): Promise<any>;
}