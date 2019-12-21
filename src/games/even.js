import getRandom from '../utils';
import startGame from '..';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandom(1, 250);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = {
    question,
    answer: correctAnswer,
  };

  return gameData;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(description, generateGameData);
