const generateRandom = (min, max) => {
  const random = Math.floor(min + Math.random() * Math.floor(max));
  return random;
};

export default generateRandom;
