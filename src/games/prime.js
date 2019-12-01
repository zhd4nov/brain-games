import { generateRandomNumber } from './even';

export const tellPrimeRulles = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const preparePrimeQuestionNumber = () => {
  const randomNumber = generateRandomNumber();
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
