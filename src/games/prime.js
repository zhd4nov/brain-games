import { generateRandomNumber } from '../utils';
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

const preparePrimeQuestionNumber = () => {
  const questionNumber = generateRandomNumber(15, 250);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  const questionPack = {
    question: questionNumber,
    answer: correctAnswer,
  };

  return questionPack;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(description, preparePrimeQuestionNumber);
