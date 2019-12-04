import readlineSync from 'readline-sync';

export const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);

  return;
};
