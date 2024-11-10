import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';
import { Repository } from 'typeorm';
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Clients>);
    createClient(newClient: CreateClientDto): Promise<CreateClientDto & Clients>;
    findAll(options: any): Promise<any>;
    findClient(clientId: number): Promise<Clients>;
    deleteClient(clientId: number): Promise<any>;
    updateClient(clientId: number, newClient: UpdateClientDto): Promise<Clients & UpdateClientDto>;
}
