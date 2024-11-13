import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items) private itemsRepository: Repository<Items>, 
) {}

async findAll(options: any): Promise<any> {
  const take = options.take || 10
  const skip = options.skip || 0

  const [result, total] = await this.itemsRepository.findAndCount({
    where: { IdBusiness: options.userId },
    order: { Name: "ASC" },
    take,
    skip
  })
  return {
    data: result,
    count: total
  }
}

async findItem(itemId: number): Promise<Items> {
    return await this.itemsRepository.findOne({ where: {Id: itemId}});
}

createItem(newItem: CreateItemDto){
    return this.itemsRepository.save(newItem);
}

async deleteItem(itemId: number): Promise<any>{
    return await this.itemsRepository.delete({ Id: itemId});
}

async updateItem(itemId: number, newItem: UpdateItemDto){
    let toUpdate = await this.itemsRepository.findOne({ where: {Id: itemId}});

    let updated = Object.assign(toUpdate, newItem);

    return this.itemsRepository.save(updated);
}
}
