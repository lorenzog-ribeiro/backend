import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('create-user')
  create() {
    return this.userService.createUser();
  }
}
