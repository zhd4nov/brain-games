export const tellEvenRulles = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const generateRandomNumber = (maxNumber = 300) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomNumber();

  return readyNumber;
};

export const prepareQuestionNumber = () => {
  const randomNumber = generateRandomNumber()
  const correctAnswerString = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionNumberString = String(randomNumber);
  const questionPack = {
    question: questionNumberString,
    answer: correctAnswerString
  };
  
  return questionPack;
};
