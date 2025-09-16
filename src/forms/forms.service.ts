import { Injectable } from '@nestjs/common';
import { CreateFormsDto, UpdateFormsDto } from './forms.dto';

@Injectable()
export class FormsService {
  create(createFormsDto: CreateFormsDto) {
    return 'This action adds a new forms';
  }

  findAll() {
    return `This action returns all formss`;
  }

  findOne(id: number) {
    return `This action returns a #id forms`;
  }

  update(id: number, updateFormsDto: UpdateFormsDto) {
    return `This action updates a #id forms`;
  }

  remove(id: number) {
    return `This action removes a #id forms`;
  }
}
