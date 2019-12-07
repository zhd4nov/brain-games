export const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(min + Math.random() * Math.floor(max + 1));
  return randomNumber;
};

export const pickMathOperator = (operators) => {
  const operatorsNumber = operators.length;
  const randomPickIndex = Math.floor(Math.random() * Math.floor(operatorsNumber));

  return operators[randomPickIndex];
};

export const prepareQuestionSingleNumber = (checker) => {
  const questionNumber = generateRandomNumber(1, 250);
  const correctAnswer = checker(questionNumber) ? 'yes' : 'no';
  const questionPack = {
    question: questionNumber,
    answer: correctAnswer,
  };

  return questionPack;
};
