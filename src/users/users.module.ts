import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { AuthModule } from 'src/utilities/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Users])
  ],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
