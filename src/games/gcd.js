import { generateRandomNumber } from './even';

export const tellGcdRulles = () => console.log('Find the greatest common divisor of given numbers.');

export const generatePairOfRandomNumbers = () => {
  const middleQuestionPair = [generateRandomNumber(50), generateRandomNumber(150)];
  const correctAnswer = calculateGreatestCommonDivisor(middleQuestionPair);
  const correctAnswerString = String(correctAnswer);
  const questionString = middleQuestionPair.join(' ');
  return [questionString, correctAnswerString];
};

const calculateGreatestCommonDivisor = (numbers) => {
  const [firstNumber, secondNumber] = numbers;
  return greatestCommonDivisor(firstNumber, secondNumber);
};

const greatestCommonDivisor = (first, second) => {
  if(!first) {
    return second;
  }
  return greatestCommonDivisor(second%first, first);
};
