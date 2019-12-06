import { generateRandomNumber, pickMathOperator } from '../utils';
import startGame from '..';

const calculateNextNumber = (progression, mathOperator = '+', step = 1) => {
  switch (mathOperator) {
    case '-':
      return progression[progression.length - 1] - step;
    case '+':
      return progression[progression.length - 1] + step;
    default:
  }
  return console.log('Error: calculateNextNumber()');
};

const generateProgression = (maxLength = 10) => {
  const maxNumber = 150;
  const startNumber = generateRandomNumber(maxNumber);
  const operators = ['+', '-'];
  const mathOperator = pickMathOperator(operators);
  const maxStep = 15;
  const progressionStep = generateRandomNumber(maxStep);

  const bunchUpNumbers = (progression = []) => {
    if (progression.length === maxLength) {
      return progression;
    }
    const nextNumber = calculateNextNumber(progression, mathOperator, progressionStep);
    return bunchUpNumbers([...progression, nextNumber]);
  };

  return bunchUpNumbers([startNumber]);
};

const prepareQuestionProgressive = () => {
  const progressionArray = generateProgression();
  const randomHiddenElementIndex = generateRandomNumber(progressionArray.length);

  const prograssionArrayWithHiddenElement = progressionArray.slice();
  const correctAnswer = prograssionArrayWithHiddenElement.splice(randomHiddenElementIndex, 1, '..');

  const correctAnswerString = String(correctAnswer);
  const readyProgressionString = prograssionArrayWithHiddenElement.join(' ');

  const questionPack = {
    question: readyProgressionString,
    answer: correctAnswerString,
  };

  return questionPack;
};

const progressionRulles = 'What number is missing in the progression?';

export default () => startGame(progressionRulles, prepareQuestionProgressive);
