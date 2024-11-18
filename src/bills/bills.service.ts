import { Injectable } from '@nestjs/common';
import { UpdateBillDto } from './dto/update-bill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bills } from './entities/bill.entity';
import { BudgetsService } from 'src/budgets/budgets.service';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bills) private billsRepository: Repository<Bills>,
    private budgetService: BudgetsService
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

    const [result, total] = await this.billsRepository.findAndCount({
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

  async create(body: any) {
    let budgetToClone;
    let budget = await this.budgetService.findBudget(body.id);

    budgetToClone = budget;

    budget.CloseIt = true;
    await this.budgetService.updateBudget(body.id, budget);

    budgetToClone.IdBudget = budget.Id;
    budgetToClone.Name = 'Factura-' + (budget.Name.substring(budget.Name.length - 4));

    return this.billsRepository.save(budgetToClone);
  }

  async remove(billId: number): Promise<any> {
    let bill = await this.billsRepository.findOne({ where: { Id: billId } });
    let budget = await this.budgetService.findBudget(bill.IdBudget);

    budget.CloseIt = false;
    await this.budgetService.updateBudget(budget.Id, budget);

    return await this.billsRepository.delete({ Id: billId });
  }
}
