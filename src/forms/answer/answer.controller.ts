import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerDto } from './create-answer.dto';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create')
  create(@Body() createAnswerDto: AnswerDto, @Body('userId') userId: string) {
    return this.answerService.create(userId, createAnswerDto);
  }

  @Get('all')
  findAllUserAnswers() {
    return this.answerService.findAllUserAnswers();
  }

  @Post('tradeOff')
  TradeOff(@Body() data) {
    return this.answerService.tradeOff(data);
  }
}
