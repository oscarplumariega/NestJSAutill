import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { AuthModule } from 'src/utilities/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Clients]),
    AuthModule
  ], 
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
