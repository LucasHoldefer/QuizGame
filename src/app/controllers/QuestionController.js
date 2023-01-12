const QuestionsRepository = require('../repositories/QuestionsRepository');

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
}

module.exports = new QuestionController();
