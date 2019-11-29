import { generateRandomNumber } from './even';

export const tellGcdRulles = () => console.log('Find the greatest common divisor of given numbers.');

export const generatePairOfRandomNumbers = () => {
  const firstNumber = generateRandomNumber(50);
  const secondNumber = generateRandomNumber(150);

  return `${firstNumber} ${secondNumber}`;
};

export const calculateGreatestCommonDivisor = (string) => {
  const numbers = string.split(' ');
  const [firstNumber, secondNumber] = numbers
  return greatestCommonDivisor(firstNumber, secondNumber);
};

const greatestCommonDivisor = (first, second) => {
  if(!first) {
    return Number(second);
  }
  return greatestCommonDivisor(second%first, first);
};
