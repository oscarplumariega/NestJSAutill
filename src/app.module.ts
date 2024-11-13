import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetsModule } from './budgets/budgets.module';
import { configService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { ItemsModule } from './items/items.module';
import * as Joi from 'joi';

@Module({
  imports: [    
  ConfigModule.forRoot({
    validationSchema: Joi.object({
      ANGULAR_URL: Joi.string()
    }),
  }),
    BudgetsModule,
    TypeOrmModule.forRoot(
      configService.getTypeOrmConfig()
    ),
    AuthModule,
    UsersModule,
    ClientsModule,
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
