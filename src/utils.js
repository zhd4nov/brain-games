const generateRandom = (min, max) => {
  const randomNumber = Math.floor(min + Math.random() * Math.floor(max));
  return randomNumber;
};

export default generateRandom;
