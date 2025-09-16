import { Module } from '@nestjs/common';
import { AnswerModule } from './answer/answer.module';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [AnswerModule, QuestionModule,],
  controllers: [FormsController,],
  providers: [FormsService,],
  exports: []
})
export class FormsModule { }
