import getRandom from '../utils';
import startGame from '..';

const greatestCommonDivisor = (first, second) => {
  if (!first) {
    return second;
  }
  return greatestCommonDivisor(second % first, first);
};

const generateGameData = () => {
  const first = getRandom(10, 300);
  const second = getRandom(300, 500);
  const correctAnswer = String(greatestCommonDivisor(first, second));
  const question = `${first} ${second}`;
  const gameData = {
    question,
    answer: correctAnswer,
  };

  return gameData;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(description, generateGameData);
