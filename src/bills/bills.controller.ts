import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bills } from './entities/bill.entity';

@Controller('Bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post('getList')
  findAll(@Body() options: any): Promise<Bills[]> {
    return this.billsService.findAll(options);
  }

  @Post('generateBill')
  create(@Body() id: any) {
    return this.billsService.create(id);
  }

  @Delete(':billId') 
  remove(@Param('billId') billId: number): Promise<Bills> { 
    return this.billsService.remove(billId);  
  }
}
