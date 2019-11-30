export const tellEvenRulles = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const generateRandomNumber = (max = 20) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(max));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomNumber();
  
  return readyNumber;
};

export const prepareQuestionNumber = () => {
  const randomNumber = generateRandomNumber(300)
  const correctAnswerString = randomNumber % 2 === 0 ? 'yes' : 'no';
  const questionNumberString = String(randomNumber);

  return [questionNumberString, correctAnswerString];
};
