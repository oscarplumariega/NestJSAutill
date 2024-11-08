import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetDto } from './budget.dto';
import { Budgets } from './budget.entity';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('Budgets')
@UseGuards(AuthGuard)
export class BudgetsController {
  constructor(private budgetsService: BudgetsService) {}

  @Get()
  findAll(@Query() options: any): Promise<Budgets[]> {
    return this.budgetsService.findAll(options);
  }

  @Get(':budgetId')
  findBudget(@Param('budgetId') budgetId: number): Promise<Budgets> {
    return this.budgetsService.findBudget(budgetId);
  }

  @Post() 
  createBook(@Body() newBudget: BudgetDto): Promise<Budgets> { 
    return this.budgetsService.createBudget(newBudget); 
  }

  @Delete(':budgetId') 
  deleteBook(@Param('budgetId') budgetId: number): Promise<Budgets> { 
    return this.budgetsService.deleteBudget(budgetId);  
  }

  @Put(':budgetId') 
  editBudget(@Param('budgetId') budgetId: number, @Body() newBudget: BudgetDto): Promise<Budgets> { 
    return this.budgetsService.updateBudget(budgetId, newBudget); 
  }
}
