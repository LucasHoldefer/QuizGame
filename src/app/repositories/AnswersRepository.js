const db = require('../../database');

class AnswerRepository {
  async findByQuestionId(question_id) {
    const row = db.query('SELECT answers.description, answers.correct FROM answers WHERE question_id = $1', [question_id]);

    return row;
  }
}

module.exports = new AnswerRepository();
