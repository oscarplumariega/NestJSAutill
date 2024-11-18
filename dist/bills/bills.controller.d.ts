import { BillsService } from './bills.service';
import { Bills } from './entities/bill.entity';
export declare class BillsController {
    private readonly billsService;
    constructor(billsService: BillsService);
    findAll(options: any): Promise<Bills[]>;
    create(id: any): Promise<any>;
    remove(billId: number): Promise<Bills>;
}
