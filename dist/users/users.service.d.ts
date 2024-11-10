import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { UpdateClientDto } from 'src/clients/dto/update-client.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & Users>;
    findOneByEmail(email: string): Promise<Users>;
    updateUser(newClient: UpdateClientDto): Promise<Users & UpdateClientDto>;
}
