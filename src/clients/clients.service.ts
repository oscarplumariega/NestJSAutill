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

  async findAllFilter(options: any): Promise<any> {
    console.log(options);
    const take = options.take
    const skip = options.skip

    const filterObject = {};
    if (options.filters != null) {
      Object.entries(options.filters)
        .filter(([, value]) => value !== null)
        .forEach(([key, value]) => (filterObject[key] = value));
    }

    filterObject['IdBusiness'] = options.userId;

    const [result, total] = await this.clientsRepository.findAndCount({
      where: filterObject,
      order: { Name: "ASC" },
      take,
      skip
    })

    let nfd = 1;
    if (result.length === 0 && options.filters != null) {
      nfd = 0;
    }

    return {
      data: result,
      count: total,
      noFilterData: nfd
    }
  }

  async findAll(options: any): Promise<any> {
    return await this.clientsRepository.findAndCount({
      where: { IdBusiness: options.userId }
    });
  }

  async findClient(clientId: number): Promise<Clients> {
    return await this.clientsRepository.findOne({ where: { Id: clientId } });
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
