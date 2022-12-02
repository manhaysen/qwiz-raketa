const fs = require('fs');

function getArrAnswerQuestion() {
  const question = fs.readFileSync(
    `${__dirname}/topics/nighthawk_flashcard_data.txt`,
    'utf-8'
  );
  const questionAnswer = question.split('\n').filter((el) => el);
  console.log(questionAnswer);
}
getArrAnswerQuestion(); 