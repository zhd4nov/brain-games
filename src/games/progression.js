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

const generateProgression = (length = 10) => {
  const startNumber = generateRandomNumber(1, 50);
  const operators = ['+', '-'];
  const mathOperator = pickMathOperator(operators);
  const progressionStep = generateRandomNumber(1, 15);

  const bunchUpNumbers = (progression = []) => {
    if (progression.length === length) {
      return progression;
    }
    const nextNumber = calculateNextNumber(progression, mathOperator, progressionStep);
    return bunchUpNumbers([...progression, nextNumber]);
  };

  return bunchUpNumbers([startNumber]);
};

const prepareQuestionProgressive = () => {
  const progressionArray = generateProgression(10);
  const randomHiddenElementIndex = generateRandomNumber(0, progressionArray.length);

  const prograssionWithHiddenElement = progressionArray.slice();
  const hiddenElement = prograssionWithHiddenElement.splice(randomHiddenElementIndex, 1, '..');

  const correctAnswer = String(hiddenElement);
  const readyProgression = prograssionWithHiddenElement.join(' ');

  const questionPack = {
    question: readyProgression,
    answer: correctAnswer,
  };

  return questionPack;
};

const progressionRulles = 'What number is missing in the progression?';

export default () => startGame(progressionRulles, prepareQuestionProgressive);
