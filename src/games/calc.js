import { generateRandomNumber, pickMathOperator } from '../utils';
import { startGame } from '..';

const getExpressionResult = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
  }
};

const generateExpression = () => {
  const maxNumber = 30;
  const operators = ['+', '-', '*'];
  const firstOperand = generateRandomNumber(maxNumber);
  const mathOperator = pickMathOperator(operators);
  const secondOperand = generateRandomNumber(maxNumber);
  const questionExpressionString = `${firstOperand} ${mathOperator} ${secondOperand}`
  const correctAnswerString = String(getExpressionResult(mathOperator, firstOperand, secondOperand));
  const questionPack = {
    question: questionExpressionString,
    answer: correctAnswerString
  };

  return questionPack;
};

const calcRulles = 'What is the result of the expression?';

export const startCalcGame = () => startGame(calcRulles, generateExpression);
