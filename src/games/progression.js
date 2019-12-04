import { generateRandomNumber, pickMathOperator } from '../utils';
import { tellRules, requestUserName, startRound } from '..';

const prepareQuestionProgressiveString = () => {
  const progressionArray = generateProgression();
  const randomHiddenElementIndex = generateRandomNumber(progressionArray.length);

  const prograssionArrayWithHiddenElement = progressionArray.slice();
  const correctAnswer = prograssionArrayWithHiddenElement.splice(randomHiddenElementIndex, 1, '..');

  const correctAnswerString = String(correctAnswer);
  const readyProgressionString = prograssionArrayWithHiddenElement.join(' ');

  const questionPack = {
    question: readyProgressionString,
    answer: correctAnswerString
  };

  return questionPack;
};

const calculateNextNumber = (progression, mathOperator = '+', step = 1) => {
  switch (mathOperator) {
    case '-':
      return progression[progression.length - 1] - step;
    case '+':
      return progression[progression.length - 1] + step;
  }
};

const generateProgression = (maxLength = 10) => {
  const maxNumber = 150
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

export const startProgressionGame = () => {
  const progressionRulles = 'What number is missing in the progression?';
  tellRules(progressionRulles);

  const userName = requestUserName();
  console.log(`Hello, ${userName}!\n`);

  startRound(userName, prepareQuestionProgressiveString);

  return;
};
