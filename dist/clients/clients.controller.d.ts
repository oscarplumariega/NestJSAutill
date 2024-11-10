import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<CreateClientDto & Clients>;
    findAll(options: any): Promise<Clients[]>;
    findOne(id: string): Promise<Clients>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<Clients & UpdateClientDto>;
    remove(id: string): Promise<any>;
}
