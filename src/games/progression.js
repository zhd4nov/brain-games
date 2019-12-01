import { generateRandomNumber } from './even.js';
import { pickMathOperator } from './calc.js';

export const tellProgressionRules = () => console.log(`What number is missing in the progression?`);

export const prepareQuestionProgressiveString = () => {
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
  const startNumber = generateRandomNumber();
  const mathOperator = pickMathOperator(['+', '-']);
  const progressionStep = generateRandomNumber();

  const bunchUpNumbers = (progression = []) => {
    if (progression.length === maxLength) {
      return progression;
    }
    const nextNumber = calculateNextNumber(progression, mathOperator, progressionStep);
    return bunchUpNumbers([...progression, nextNumber]);
  };

  return bunchUpNumbers([startNumber]);
};
