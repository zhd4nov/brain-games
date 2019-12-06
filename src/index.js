import readlineSync from 'readline-sync';

const tellRules = (rulles) => console.log(rulles);

const checkUserAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const startRound = (userName, questionGenerator, roundLimitCounter = 0) => {
  if (roundLimitCounter === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  const questionPack = questionGenerator();
  console.log(`Question: ${questionPack.question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = checkUserAnswer(questionPack.answer, userAnswer);
  if (!result) {
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionPack.answer}".\nLet's try again, ${userName}!`);
  }
  console.log('Correct!');

  return startRound(userName, questionGenerator, roundLimitCounter + 1);
};

const startGame = (rulles, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  tellRules(rulles);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, questionGenerator);
};

export default startGame;
