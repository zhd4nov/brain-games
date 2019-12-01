import readlineSync from 'readline-sync';
import { tellGcdRulles, generatePairOfRandomNumbers } from './games/gcd';
import { tellEvenRulles, prepareQuestionNumber } from './games/even';
import { tellCalcRulles, generateExpression } from './games/calc';
import { tellProgressionRules, prepareQuestionProgressiveString } from './games/progression';
import { tellPrimeRulles, preparePrimeQuestionNumber } from './games/prime';

/**
 * -------------------------
 * Support functions / Tools
 * -------------------------
 */
const buildQuestion = (gameType) => {
  let questionPack;

  switch (gameType) {
    case 'even':
      questionPack = prepareQuestionNumber();
      break;
    case 'calc':
      questionPack = generateExpression();
      break;
    case 'gcd':
      questionPack = generatePairOfRandomNumbers();
      break;
    case 'progression':
      questionPack = prepareQuestionProgressiveString();
      break;
    case 'prime':
      questionPack = preparePrimeQuestionNumber();
      break;
  }

  return questionPack;
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const checkUserAnswer = (question, userAnswer) => {
  return question === userAnswer;
};

/**
 * ----------------
 * Export main flow
 * ----------------
 */
export const sayWelcome = () => {
    console.log('Welcome to the Brain Games!');
};

export const tellRules = (gameType = 'empty') => {
  switch (gameType) {
    case 'even':
      tellEvenRulles();
      break;
    case 'calc':
      tellCalcRulles();
      break;
    case 'gcd':
      tellGcdRulles();
      break;
    case 'progression':
      tellProgressionRules();
      break;
    case 'prime':
      tellPrimeRulles();
      break;
  }
  return;
};

export const requestUserName = () => readlineSync.question('\nMay I have your name? ');

export const greetUser = (userName) => {
  console.log(`Hello, ${userName}!\n`);
};

export const startGame = (gameType = 'empty', userName, roundLimit = 0) => {
  if (roundLimit === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  if (gameType === 'empty') {
    return;
  }

  const questionPack = buildQuestion(gameType);
  askQuestion(questionPack.question);
  const userAnswer = getUserAnswer();
  const result = checkUserAnswer(questionPack.answer, userAnswer);
  if (!result) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionPack.answer}".\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  return startGame(gameType, userName, roundLimit + 1);
};
