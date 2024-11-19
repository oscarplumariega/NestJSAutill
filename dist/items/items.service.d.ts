import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from './entities/item.entity';
import { Repository } from 'typeorm';
export declare class ItemsService {
    private itemsRepository;
    constructor(itemsRepository: Repository<Items>);
    getPage(initialElement: any): {
        page: number;
        initialElement: number;
        finalElement: number;
    };
    findAllFilter(options: any): Promise<any>;
    findAll(options: any): Promise<any>;
    findItem(itemId: number): Promise<Items>;
    createItem(newItem: CreateItemDto): Promise<CreateItemDto & Items>;
    deleteItem(itemId: number): Promise<any>;
    updateItem(itemId: number, newItem: UpdateItemDto): Promise<Items & UpdateItemDto>;
}
