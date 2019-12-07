export const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(min + Math.random() * Math.floor(max + 1));
  return randomNumber;
};

export const pickMathOperator = (operators) => {
  const operatorsNumber = operators.length;
  const randomPickIndex = Math.floor(Math.random() * Math.floor(operatorsNumber));

  return operators[randomPickIndex];
};
