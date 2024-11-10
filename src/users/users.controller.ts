import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Users } from './user.entity';

@Controller('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/getByEmail/:email')
  findUser(@Param('email') email: string): Promise<any> {
    return this.usersService.findOneByEmail(email);
  }

  @Put() 
  editBudget( @Body() newUser: CreateClientDto): Promise<Users> { 
    return this.usersService.updateUser(newUser); 
  }
}
