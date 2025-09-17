import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './users.repository';
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})

export class UsersModule {}
