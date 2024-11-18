import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients } from './entities/client.entity';

@Controller('Clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto);
  }

  @Post('getList')
  findAll(@Body() options: any): Promise<Clients[]> {
    return this.clientsService.findAll(options);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsService.findClient(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientsService.deleteClient(id);
  }
}
