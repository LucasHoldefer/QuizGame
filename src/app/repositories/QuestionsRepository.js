const db = require('../../database');

class QuestionsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM Questions');
    return rows;
  }

  async create({ description }) {
    const row = await db.query('INSERT INTO questions(description) VALUES($1) RETURNING *', [description]);
    return row;
  }

  async findCompleteQuestionById(question_id) {
    console.log(question_id);

    const row = await db.query(`SELECT answers.description as answer_description, answers.correct, questions.description as question_description
    FROM answers
    INNER JOIN questions ON questions.id = answers.question_id
    WHERE questions.id = $1`, [question_id]);

    console.log(row);

    return row;
  }

  async findById(question_id) {
    const row = await db.query('SELECT questions.description FROM questions WHERE questions.id = $1', [question_id]);

    console.log(row);

    return row;
  }
}

module.exports = new QuestionsRepository();
