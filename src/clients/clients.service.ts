import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Clients) private clientsRepository: Repository<Clients>,
  ) { }


  createClient(newClient: CreateClientDto) {
    return this.clientsRepository.save(newClient);
  }

  async findAll(options: any): Promise<any> {
    const take = options.take || 10
    const skip = options.skip || 0

    const [result, total] = await this.clientsRepository.findAndCount({
      where: { IdBusiness: options.userId },
      order: { Name: "ASC" },
      take,
      skip
    })
    return {
      data: result,
      count: total
    }
  }

  async findClient(clientId: number): Promise<Clients> {
    return await this.clientsRepository.findOne({ where: {Id: clientId}});
}

  async deleteClient(clientId: number): Promise<any> {
    return await this.clientsRepository.delete({ Id: clientId });
  }

  async updateClient(clientId: number, newClient: UpdateClientDto) {
    let toUpdate = await this.clientsRepository.findOne({ where: { Id: clientId } });

    let updated = Object.assign(toUpdate, newClient);

    return this.clientsRepository.save(updated);
  }
}
