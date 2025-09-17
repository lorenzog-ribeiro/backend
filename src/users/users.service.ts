import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IUserRepository } from './user-interface';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}
  async createUser(data: Prisma.UserCreateInput): Promise<string> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      return userExists.id;
    }
    const user = await this.userRepository.create(data);

    return user.id;
  }
}
