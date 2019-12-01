import { generateRandomNumber } from './even';

export const tellPrimeRulles = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const preparePrimeQuestionNumber = () => {
  const randomNumber = generateRandomNumber(400);
  const correctAnswerString = isPrime(randomNumber) ? 'yes' : 'no';
  const randomNumberString = String(randomNumber);
  
  return [randomNumberString, correctAnswerString];
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
