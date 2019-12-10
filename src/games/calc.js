import generateRandom from '../utils';
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
  return null;
};

const pickMathOperator = (operators) => {
  const operatorsNumber = operators.length;
  const randomPickIndex = Math.floor(Math.random() * Math.floor(operatorsNumber));

  return operators[randomPickIndex];
};

const operators = ['+', '-', '*'];

const generateGameData = () => {
  const firstOperand = generateRandom(30, 60);
  const mathOperator = pickMathOperator(operators);
  const secondOperand = generateRandom(10, 60);
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

export default () => startGame(description, generateGameData);
