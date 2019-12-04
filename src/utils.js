export const generateRandomNumber = (maxNumber) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomNumber();

  return readyNumber;
};

export const pickMathOperator = (operators) => {
  const operatorsNumber = operators.length;
  const randomPickIndex = Math.floor(Math.random() * Math.floor(operatorsNumber));

  return operators[randomPickIndex];
};
