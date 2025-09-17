import { Injectable, Logger } from '@nestjs/common';
import { AnswerDto } from './create-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerService {
  private readonly logger = new Logger(AnswerService.name);
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createAnswerDto: AnswerDto): Promise<any> {
    try {
      const result = await this.prisma.result.create({
        data: {
          userId: userId,
          answers: JSON.parse(JSON.stringify(createAnswerDto.answers)),
        },
      });
      this.logger.log(`Created answer for user ${userId}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to create answer for user ${userId}`, error.stack);
      throw error;
    }
  }

  findAllUserAnswers() {
    return this.prisma.result.findMany();
  }
}
