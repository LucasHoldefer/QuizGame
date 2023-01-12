// fazer um select de todos os IDS das questions e colocar em um array.
// fazer um ramdom destes IDs para ficarem em ordem aleatoria
// percorrer este array consultando suas answers para criar um object com...
/*
{
  "quenstion": {
    "description": "description? description? description? ",
    "answers": [
      "answer": {
        "description": "description description description"
        "correct": true
      }
    ]
  }
}
*/

const { Router } = require('express');

const QuestionController = require('./app/controllers/QuestionController');

const router = Router();

router.get('/questions', QuestionController.index);
router.post('/questions', QuestionController.store);

module.exports = router;
