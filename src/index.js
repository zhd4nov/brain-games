import readlineSync from 'readline-sync';

const roundsCount = 3;

const startRound = (userName, questionGenerator, roundsCounter = 0) => {
  if (roundsCounter === roundsCount) {
    console.log(`Congratulations, ${userName}!`);
    return null;
  }

  const questionPack = questionGenerator();
  console.log(`Question: ${questionPack.question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = questionPack.answer === userAnswer;
  if (!result) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionPack.answer}".`);
    console.log(`Let's try again, ${userName}!`);
    return null;
  }
  console.log('Correct!');

  return startRound(userName, questionGenerator, roundsCounter + 1);
};

const startGame = (rulles, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulles);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, questionGenerator);

  return null;
};

export default startGame;
