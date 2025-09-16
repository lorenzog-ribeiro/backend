import { Injectable } from '@nestjs/common';
import { CreateFormsDto } from './../forms.dto';
import { UpdateFormsDto } from './../forms.dto';

@Injectable()
export class QuestionService {
  create(createQuestionDto: CreateFormsDto) {
    return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #id question`;
  }

  update(id: number, updateQuestionDto: UpdateFormsDto) {
    return `This action updates a #id question`;
  }

  remove(id: number) {
    return `This action removes a #id question`;
  }
}
