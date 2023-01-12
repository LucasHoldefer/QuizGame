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
}

module.exports = new QuestionsRepository();
