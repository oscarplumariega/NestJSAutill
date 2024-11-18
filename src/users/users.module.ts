import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { AuthModule } from 'src/utilities/auth.module';
import { UsersController } from './users.controller';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
