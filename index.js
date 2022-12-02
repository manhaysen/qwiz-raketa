
const fs = require('fs');
const prompt = require('prompt');
const c = require('ansi-colors');
const readlineSync = require('readline-sync');





function questions() {
    // стартовый путь к файлам
    let path = ''
    // стартовая надпись
    const firstMessage = 'Выбери одну из тем \n 1.Веселье \n 2.Печаль \n 3.Нормально \n'
    console.log(firstMessage)



   // спрашиваем номер темы 
 const result = readlineSync.question('Введите номер темы')

// если тема подходит то создаём новый путь
    if (result === '1') {
        path = `nighthawk_flashcard_data.txt`
        console.log('привет!')
    } else if (result === '2') {
        path = `otter_flashcard_data.txt`
        console.log('пока!')
    } else if (result === '3') {
        path = `raccoon_flashcard_data.txt`
        console.log('что тут?!')
    } else {
        console.log('а такой нет')
    }
    


// тут мы ходим в дирректорию и читаем файл
    const question = fs.readFileSync(
        `${__dirname}/topics/${path}`,
        'utf-8'
      );
      // тут мы делаем из файла массив 
      const questionAnswer = question.split('\n').filter((el) => el);







// это счётчик побед
let counter = 0
//перебор только по вопросам без ответа
    for (let i = 0; i < questionAnswer.length; i +=2) {
        
        // спрашиваем конкретный вопрос
        const questionN = readlineSync.question(questionAnswer[i])
        //выводим вопрос
        console.log(questionN)
        //делаем проверку
        if (questionN == questionAnswer[i +1]) {
            console.log('yes')
            counter++
        } 
        else{
            console.log('неа')
        }
       
    }
    
    // вывод очков
    console.log('Верные ответы: ' + counter)
    return 
}


questions()
