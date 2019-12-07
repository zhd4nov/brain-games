import { prepareQuestionSingleNumber } from '../utils';
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

const preparePrimeQuestionNumber = () => prepareQuestionSingleNumber(isPrime);

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(description, preparePrimeQuestionNumber);
