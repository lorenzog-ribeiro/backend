import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerDto } from './create-answer.dto';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: AnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  findAllUserAnswers() {
    return this.answerService.findAllUserAnswers();
  }
}
