import readlineSync from 'readline-sync';

const startGame = (rulles, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulles);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const maxCounter = 3;

  const startRound = (generateRoundData, counter = 0) => {
    if (counter === maxCounter) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const roundData = generateRoundData();
    console.log(`Question: ${roundData.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = roundData.answer === userAnswer;
    if (!result) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${roundData.answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');

    return startRound(generateRoundData, counter + 1);
  };

  return startRound(generateGameData);
};

export default startGame;
