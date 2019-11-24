import readlineSync from 'readline-sync';

export const startGame = () => {
    console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('What is your name, human? ');
  console.log(`Hmm... Okay. Hi, ${userName}!`);
};
