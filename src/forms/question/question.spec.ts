import { Test } from '@nestjs/testing';
import { QuestionController } from './.controller';
import { QuestionService } from './.service';

describe('QuestionController', () => {
  let QuestionController: QuestionController;
  let QuestionService: QuestionService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [QuestionController],
        providers: [QuestionService],
      }).compile();

    QuestionService = moduleRef.get<QuestionService>(QuestionService);
    QuestionController = moduleRef.get<QuestionController>(QuestionController);
  });

  describe('findAll', () => {
    it('should return an array of Question', async () => {
      const result = ['test'];
      jest.spyOn(QuestionService, 'findAll').mockImplementation(() => result);

      expect(await QuestionController.findAll()).toBe(result);
    });
  });
});
