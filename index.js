
function counter (input, answer) {
  let counter = 0;
  if(input.toLowerCase().trim() === answer.toLowerCase()) {
    counter+=5;
  } else counter -= 5;
  return counter;

}


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

// const arr = [
//   'Что является основным источником пищи для ночных ястребов?',
//   'насекомые',
//   'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
//   'нет',
//   'Верно или нет?   Ночные ястребы вьют гнезда.',
//   'нет',
//   'Где обыкновенные Ночные Ястребы проводят зиму?',
//   'Южная Америка',
//   'Верно или нет?  Бульбат - другое название обыкновенного ночного ястреба.',
//   'верно',
// ];

function enumeration(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      return arr[i];
    } else {
      return arr[i];
    }
  }
}


