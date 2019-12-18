import readlineSync from 'readline-sync';

const counter = 3;

const startRound = (userName, questionGenerator, roundsCounter = 0) => {
  if (roundsCounter === counter) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  const roundData = questionGenerator();
  console.log(`Question: ${roundData.question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = roundData.answer === userAnswer;
  if (!result) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${roundData.answer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');

  return startRound(userName, questionGenerator, roundsCounter + 1);
};

const startGame = (rulles, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulles);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameResult = startRound(userName, questionGenerator);

  return gameResult;
};

export default startGame;
