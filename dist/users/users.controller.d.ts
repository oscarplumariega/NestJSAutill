import { UsersService } from './users.service';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Users } from './entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findUser(email: string): Promise<any>;
    find(id: number): Promise<any>;
    editBudget(newUser: CreateClientDto): Promise<Users>;
}
