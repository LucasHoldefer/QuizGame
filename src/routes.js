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
const AnswerController = require('./app/controllers/AnswerController');

const router = Router();

router.get('/questions', QuestionController.index);
router.post('/questions', QuestionController.store);
// router.get('/questions/:id', QuestionController.show);
router.get('/questions/:id', QuestionController.test);

router.get('/answers/:question_id', AnswerController.show);

module.exports = router;
