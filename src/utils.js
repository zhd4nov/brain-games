export const generateRandomNumber = (maxNumber = 300) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomNumber();

  return readyNumber;
};
