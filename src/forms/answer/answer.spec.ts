import { Test } from '@nestjs/testing';
import { AnswerController } from './.controller';
import { AnswerService } from './.service';

describe('AnswerController', () => {
  let AnswerController: AnswerController;
  let AnswerService: AnswerService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [AnswerController],
        providers: [AnswerService],
      }).compile();

    AnswerService = moduleRef.get<AnswerService>(AnswerService);
    AnswerController = moduleRef.get<AnswerController>(AnswerController);
  });

  describe('findAll', () => {
    it('should return an array of Answer', async () => {
      const result = ['test'];
      jest.spyOn(AnswerService, 'findAll').mockImplementation(() => result);

      expect(await AnswerController.findAll()).toBe(result);
    });
  });
});
