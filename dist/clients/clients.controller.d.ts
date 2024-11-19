import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<CreateClientDto & Clients>;
    findAllFilter(options: any): Promise<Clients[]>;
    findAll(options: any): Promise<Clients[]>;
    findOne(id: number): Promise<Clients>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<Clients & UpdateClientDto>;
    remove(id: number): Promise<any>;
}
