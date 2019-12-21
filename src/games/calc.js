import getRandom from '../utils';
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

const getMathOperator = (operators) => {
  const operatorsLength = operators.length;
  const randomIndex = getRandom(0, operatorsLength - 1);

  return operators[randomIndex];
};

const operators = ['+', '-', '*'];

const generateGameData = () => {
  const firstOperand = getRandom(30, 60);
  const mathOperator = getMathOperator(operators);
  const secondOperand = getRandom(10, 60);
  const question = `${firstOperand} ${mathOperator} ${secondOperand}`;
  const correctAnswer = String(
    getExpressionResult(mathOperator, firstOperand, secondOperand),
  );
  const gameData = {
    question,
    answer: correctAnswer,
  };

  return gameData;
};

const description = 'What is the result of the expression?';

export default () => startGame(description, generateGameData);
