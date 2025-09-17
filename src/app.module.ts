import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma/prisma.service';
import { AnswerService } from './forms/answer/answer.service';
import { AnswerController } from './forms/answer/answer.controller';
import { AnswerModule } from './forms/answer/answer.module';

@Module({
  imports: [UsersModule],
  controllers: [UsersController, AppController, AnswerController],
  providers: [AppService, UsersService, PrismaService, AnswerService],
})
export class AppModule {}
