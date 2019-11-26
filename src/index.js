import readlineSync from 'readline-sync';

const startGreet = () => {
    console.log('Welcome to the Brain Games!');
};

const getUserName = () => readlineSync.question('What is your name, human? ');

const greetUser = (userName) => {
  console.log(`Hmm... Okay. Hi, ${userName}!`);
};

export const startGame = () => {
  startGreet();
  const userName = getUserName();
  greetUser(userName);
  return;
};
