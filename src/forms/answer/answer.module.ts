import { AnswerService } from './answer.service';
import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';

@Module({
  imports: [],
  controllers: [AnswerController,],
  providers: [AnswerService,],
  exports: []
})
export class AnswerModule { }
