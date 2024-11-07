import { Module } from '@nestjs/common';
import { Budgets } from './budget.entity';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Budgets])], 
  providers: [BudgetsService], 
  controllers: [BudgetsController], 
})
export class BudgetsModule {}