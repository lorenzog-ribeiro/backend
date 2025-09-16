import { Injectable } from '@nestjs/common';
import { CreateFormsDto } from './../forms.dto';
import { UpdateFormsDto } from './../forms.dto';

@Injectable()
export class AnswerService {
  create(createAnswerDto: CreateFormsDto) {
    return 'This action adds a new answer';
  }

  findAll() {
    return `This action returns all answers`;
  }

  findOne(id: number) {
    return `This action returns a #id answer`;
  }

  update(id: number, updateAnswerDto: UpdateFormsDto) {
    return `This action updates a #id answer`;
  }

  remove(id: number) {
    return `This action removes a #id answer`;
  }
}
