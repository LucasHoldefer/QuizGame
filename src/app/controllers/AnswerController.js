const AnswerRepository = require('../repositories/AnswersRepository');

class AnswerController {
  async show(request, response) {
    const { question_id } = request.params;

    const answers = await AnswerRepository.findByQuestionId(question_id);

    response.json(answers);
  }
}

module.exports = new AnswerController();
