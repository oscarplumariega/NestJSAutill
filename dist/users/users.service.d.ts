import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateClientDto } from 'src/clients/dto/update-client.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & Users>;
    findOneByEmail(email: string): Promise<Users>;
    find(id: number): Promise<Users>;
    updateUser(newClient: UpdateClientDto): Promise<Users & UpdateClientDto>;
}
