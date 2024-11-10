import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './create-user.dto';
import { UpdateClientDto } from 'src/clients/dto/update-client.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async findOneByEmail(email: string): Promise<Users> {
    return this.usersRepository.findOne({ where: {Email: email}});
  }

  async updateUser(newClient: UpdateClientDto) {
    let toUpdate = await this.usersRepository.findOne({ where: { Id: newClient.Id } });

    let updated = Object.assign(toUpdate, newClient);

    return this.usersRepository.save(updated);
  }
}