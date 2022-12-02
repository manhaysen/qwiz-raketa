const fs = require('fs');
const prompt = require('prompt');
const c = require('ansi-colors');
const readlineSync = require('readline-sync');

function questions() {
  // стартовый путь к файлам
  let path = '';
  // стартовая надпись
  const firstMessage =
    'Выбери одну из тем\n\n 1.Странные вопросы \n 2.Самый-самый \n 3.Это Питер, детка! \n';
  console.log(firstMessage);


  // спрашиваем номер темы
  const result = readlineSync.question('Введите номер темы\n');

  // если тема подходит то создаём новый путь
  if (result === '1') {
    path = `1.txt`;
  } else if (result === '2') {
    path = `2.txt`;
  } else if (result === '3') {
    path = `3.txt`;
  } else {
    console.log('\nа такой нет\n');
  }
  console.log(c.yellow('＼(〇_ｏ)／\nЕсли станет страшно - введи end,\nЕсли хочешь выбрать другую тему - введи start\n＼(〇_ｏ)／\n'));

  // тут мы ходим в дирректорию и читаем файл
  const question = fs.readFileSync(`${__dirname}/topics/${path}`, 'utf-8');
  // тут мы делаем из файла массив
  const questionAnswer = question.split('\n').filter((el) => el);

  // это счётчик побед
  let counter = 0;

  //перебор только по вопросам без ответа
  for (let i = 0; i < questionAnswer.length; i += 2) {

    // спрашиваем конкретный вопрос и выводим его
    const questionN = readlineSync.question(c.blue.bold(`${questionAnswer[i]}\n`));

    //делаем проверку
    if (questionN.toLowerCase() == questionAnswer[i + 1].toLowerCase()) {
      console.log('');
      console.log(c.green('yes\n'));
      counter++;
    }

    else { 
        if (questionN.toLowerCase() === 'start'.toLowerCase()) {
          return questions()}
          else{ 
            if (questionN.toLowerCase() === 'end'.toLowerCase()) {
            //  console.log('Ваши баллы: ' + counter);
          break}
          else{
      console.log(c.red(`\nнеа\nправильный ответ:${questionAnswer[i + 1]}\n`));}
    }
  }
}

  // вывод очков
  console.log('Ваши баллы: ' + counter);
  return;
}

questions();
