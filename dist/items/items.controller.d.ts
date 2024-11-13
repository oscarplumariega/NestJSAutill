import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from './entities/item.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<CreateItemDto & Items>;
    findAll(options: any): Promise<Items[]>;
    findOne(id: string): Promise<Items>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<Items & UpdateItemDto>;
    remove(id: string): Promise<any>;
}
