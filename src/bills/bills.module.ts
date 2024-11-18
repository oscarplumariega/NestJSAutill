import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { Bills } from './entities/bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/utilities/auth.module';
import { BudgetsModule } from 'src/budgets/budgets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bills]),
    AuthModule,
    BudgetsModule
  ], 
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
