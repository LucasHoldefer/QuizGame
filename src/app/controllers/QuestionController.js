const QuestionsRepository = require('../repositories/QuestionsRepository');
const AnswersRepository = require('../repositories/AnswersRepository');

class QuestionController {
  async index(request, response) {
    const questions = await QuestionsRepository.findAll();
    response.json(questions);
  }

  async store(request, response) {
    const { description } = request.body;

    const questions = await QuestionsRepository.create({ description });
    response.json(questions);
  }

  async show(request, response) {
    const question_id = request.params.id;

    const questions = await QuestionsRepository.findCompleteQuestionById(question_id);
    response.json(questions);
  }

  async test(request, response) {
    const question_id = request.params.id;

    const question = await QuestionsRepository.findById(question_id);
    const answers = await AnswersRepository.findByQuestionId(question_id);

    const completeQuestion = [{
      question: {
        description: question[0].description,
        answers,
      },
    }];

    response.json(completeQuestion);
  }
}

module.exports = new QuestionController();
