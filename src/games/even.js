import generateRandom from '../utils';
import startGame from '..';

const isEven = (number) => number % 2 === 0;

const prepareQuestionNumber = () => {
  const questionNumber = generateRandom(1, 250);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const questionPack = {
    question: questionNumber,
    answer: correctAnswer,
  };

  return questionPack;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(description, prepareQuestionNumber);
