import { Injectable } from '@nestjs/common';
import { AnswerDto } from './create-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string,  createAnswerDto: AnswerDto): Promise<any> {
    console.log('Creating answer for userId:', userId);
    console.log('Answer data:', createAnswerDto);
    return this.prisma.result.create({
      data: {
        userId: userId,
        answers: JSON.parse(JSON.stringify(createAnswerDto.answers)),
      },
    });
  }

  findAllUserAnswers() {
    return this.prisma.result.findMany();
  }
}
