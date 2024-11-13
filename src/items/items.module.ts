import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Items } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/utilities/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items]),
    AuthModule
  ], 
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
