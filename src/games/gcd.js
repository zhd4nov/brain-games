import { generateRandomNumber } from '../utils';
import startGame from '..';

const greatestCommonDivisor = (first, second) => {
  if (!first) {
    return second;
  }
  return greatestCommonDivisor(second % first, first);
};

const generatePairOfRandomNumbers = () => {
  const firstNumber = generateRandomNumber(10, 300);
  const secondNumber = generateRandomNumber(300, 500);
  const correctAnswer = String(greatestCommonDivisor(firstNumber, secondNumber));
  const questionPair = `${firstNumber} ${secondNumber}`;
  const questionPack = {
    question: questionPair,
    answer: correctAnswer,
  };

  return questionPack;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(description, generatePairOfRandomNumbers);
