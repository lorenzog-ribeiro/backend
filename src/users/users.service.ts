import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: Prisma.UserCreateInput): Promise<string> {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (userExists) {
      return userExists.id;
    }
    const user = await this.prisma.user.create({
      data,
    });
    return user.id;
  }
}
