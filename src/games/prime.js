import { generateRandomNumber } from '../utils';
import { tellRules, requestUserName, startRound } from '..';

const preparePrimeQuestionNumber = () => {
  const maxNumber = 50;
  const randomNumber = generateRandomNumber(maxNumber);
  const correctAnswerString = isPrime(randomNumber) ? 'yes' : 'no';
  const randomNumberString = String(randomNumber);
  const questionPack = {
    question: randomNumberString,
    answer: correctAnswerString
  };

  return questionPack;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const startPrimeGame = () => {
  const primeRulles = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  tellRules(primeRulles);

  const userName = requestUserName();
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, preparePrimeQuestionNumber);

  return;
};
