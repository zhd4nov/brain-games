import { generateRandomNumber } from './even.js';

export const tellCalcRulles = () => console.log('What is the result of the expression?');

export const pickMathOperator = (operators = ['+', '-', '*']) => {
  const operatorsNumber = operators.length;
  const randomPickIndex = Math.floor(Math.random() * Math.floor(operatorsNumber));

  return operators[randomPickIndex];
};

export const generateExpression = () => {
  const firstOperand = generateRandomNumber();
  const mathOperator = pickMathOperator();
  const secondOperand = generateRandomNumber();
  const questionExpressionString = `${firstOperand} ${mathOperator} ${secondOperand}`
  const correctAnswerString = String(eval(questionExpressionString));

  return [questionExpressionString, correctAnswerString];
};
