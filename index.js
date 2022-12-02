
const fs = require('fs');
const prompt = require('prompt');
const c = require('ansi-colors');


const firstMessage = 'Выбери одну из тем \n 1.Веселье \n 2.Печаль \n 3.Нормально \n'


prompt.start()

let question = ['вопрос1','ответ1','вопрос2','ответ2','вопрос3','ответ3','вопрос4','ответ4',]

// prompt.message = c.red("Question!");

prompt.get([
    {
    description: (c.blue(firstMessage)),
    type: 'number',
    question: ''

 },
   
],
function (err, result) {
 let answer = '0'
    if (result.question === 1) {
        answer = result.question
        console.log('привет!')
    } else if (result.question === 2) {
        answer = result.question
        console.log('пока!')
    } else if (result.question === 2) {
        answer = result.question
        console.log('что тут?!')
    }
    
    console.log(question[result.question])


    // console.log(c.blue(result.question))
    return 
}
)
    

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



