const getNumber = () => Math.round(Math.random() * 100);

const playRound = () => {
  const number = getNumber();
  const number2 = getNumber();

  const userAnswer = prompt(`Пожалуйста сложите числа ${number} и ${number2}. Запишите полученный ответ в строку ниже.`);
  const correctAnswer = number + number2;
  
  console.log(correctAnswer, userAnswer);

  return parseInt(userAnswer.trim()) === correctAnswer;
}

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();

    if (isCorrect) {
      alert('Ура! Всё верно :)');
    } else {
      alert('Это неправильный ответ! Вы проиграли :(');
      return;
    }
  }
  alert('Вы выиграли!)))');
}

const button = document.querySelector('button');
button.addEventListener('click', playGame);