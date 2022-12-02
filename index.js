
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
    
