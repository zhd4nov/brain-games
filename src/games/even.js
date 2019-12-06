import { generateRandomNumber } from '../utils';
import startGame from '..';

const prepareQuestionNumber = () => {
  const maxNumber = 600;
  const randomNumber = generateRandomNumber(maxNumber);
  const correctAnswerString = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionNumberString = String(randomNumber);
  const questionPack = {
    question: questionNumberString,
    answer: correctAnswerString,
  };

  return questionPack;
};

const evenRulles = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(evenRulles, prepareQuestionNumber);
