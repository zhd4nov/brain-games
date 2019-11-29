export const tellEvenRulles = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const generateRandomNumber = (max = 20) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(max));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomNumber();

  return readyNumber;
};
