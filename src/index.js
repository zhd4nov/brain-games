import readlineSync from 'readline-sync';

const roundLimit = 3;

const startRound = (userName, questionGenerator, roundLimitCounter = 0) => {
  if (roundLimitCounter === roundLimit) {
    console.log(`Congratulations, ${userName}!`);
    return null;
  }

  const questionPack = questionGenerator();
  console.log(`Question: ${questionPack.question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = questionPack.answer === userAnswer;
  if (!result) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionPack.answer}".\nLet's try again, ${userName}!`);
    return null;
  }
  console.log('Correct!');

  return startRound(userName, questionGenerator, roundLimitCounter + 1);
};

const startGame = (rulles, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulles);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return startRound(userName, questionGenerator);
};

export default startGame;
