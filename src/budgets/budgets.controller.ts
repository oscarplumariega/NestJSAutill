import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { Request } from 'express';
import { BudgetDto } from './budget.dto';
import { Budgets } from './budget.entity';

@Controller('Budgets')
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
