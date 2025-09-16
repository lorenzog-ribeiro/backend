import { Injectable } from '@nestjs/common';
import { AnswerDto } from './create-answer.dto';

@Injectable()
export class AnswerService {
  create(createAnswerDto: AnswerDto) {
    
  }

  findAllUserAnswers() {
    return `This action returns all answers`;
  }
}
