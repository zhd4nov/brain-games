import getRandom from '../utils';
import startGame from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const question = getRandom(1, 250);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = {
    question,
    answer: correctAnswer,
  };

  return gameData;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(description, generateGameData);
