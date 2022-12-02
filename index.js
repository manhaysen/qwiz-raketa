function counter (input, answer) {
  let counter = 0;
  if(input.toLowerCase().trim() === answer.toLowerCase()) {
    counter+=5;
  } else counter -= 5;
  return counter;

}
