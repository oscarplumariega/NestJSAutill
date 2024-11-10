import { Module } from '@nestjs/common';
import { Budgets } from './entities/budget.entity';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/utilities/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budgets]),
    AuthModule
  ], 
  providers: [BudgetsService], 
  controllers: [BudgetsController], 
})
export class BudgetsModule {}