import { generateRandomNumber } from '../utils';
import { tellRules, requestUserName, startRound } from '..';

const greatestCommonDivisor = (first, second) => {
  if(!first) {
    return second;
  }
  return greatestCommonDivisor(second%first, first);
};

const calculateGreatestCommonDivisor = (numbers) => {
  const [firstNumber, secondNumber] = numbers;
  return greatestCommonDivisor(firstNumber, secondNumber);
};

const generatePairOfRandomNumbers = () => {
  const maxNumber = 300;
  const middleQuestionPair = [generateRandomNumber(maxNumber), generateRandomNumber(maxNumber)];
  const correctAnswer = calculateGreatestCommonDivisor(middleQuestionPair);
  const correctAnswerString = String(correctAnswer);
  const questionString = middleQuestionPair.join(' ');
  const questionPack = {
    question: questionString,
    answer: correctAnswerString
  };

  return questionPack;
};

export const startGcdGame = () => {
  const gcdRulles = 'Find the greatest common divisor of given numbers.';
  tellRules(gcdRulles);

  const userName = requestUserName();
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, generatePairOfRandomNumbers);

  return;
};
