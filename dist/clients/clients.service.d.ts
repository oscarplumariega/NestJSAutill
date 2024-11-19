import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';
import { Repository } from 'typeorm';
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Clients>);
    getPage(initialElement: any): {
        page: number;
        initialElement: number;
        finalElement: number;
    };
    createClient(newClient: CreateClientDto): Promise<CreateClientDto & Clients>;
    findAllFilter(options: any): Promise<any>;
    findAll(options: any): Promise<any>;
    findClient(clientId: number): Promise<Clients>;
    deleteClient(clientId: number): Promise<any>;
    updateClient(clientId: number, newClient: UpdateClientDto): Promise<Clients & UpdateClientDto>;
}
