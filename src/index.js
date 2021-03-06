import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const startRound = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const roundData = generateGameData();
    console.log(`Question: ${roundData.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = roundData.answer === userAnswer;
    if (!result) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${roundData.answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');

    return startRound(counter + 1);
  };

  return startRound(0);
};

export default startGame;
