import { generateRandomNumber, pickMathOperator } from '../utils';
import startGame from '..';

const getExpressionResult = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
  }
  return 'Error: getExpressionResult()';
};

const operators = ['+', '-', '*'];

const generateExpression = () => {
  const firstOperand = generateRandomNumber(30, 60);
  const mathOperator = pickMathOperator(operators);
  const secondOperand = generateRandomNumber(10, 60);
  const questionExpression = `${firstOperand} ${mathOperator} ${secondOperand}`;
  const correctAnswer = String(
    getExpressionResult(mathOperator, firstOperand, secondOperand),
  );
  const questionPack = {
    question: questionExpression,
    answer: correctAnswer,
  };

  return questionPack;
};

const description = 'What is the result of the expression?';

export default () => startGame(description, generateExpression);
