import { generateRandomNumber } from '../utils';
import { tellRules, requestUserName, startRound } from '..';

const prepareQuestionNumber = () => {
  const randomNumber = generateRandomNumber()
  const correctAnswerString = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionNumberString = String(randomNumber);
  const questionPack = {
    question: questionNumberString,
    answer: correctAnswerString
  };

  return questionPack;
};

export const startEvenGame = () => {
  const evenRulles = 'Answer "yes" if the number is even, otherwise answer "no".';
  tellRules(evenRulles);

  const userName = requestUserName();
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, prepareQuestionNumber)

  return;
};
