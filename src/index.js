
import readlineSync from 'readline-sync';

export const tellRules = (rulles) => console.log(`Welcome to the Brain Games!\n${rulles}`);

export const requestUserName = () => readlineSync.question('\nMay I have your name? ');

const checkUserAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

export const startRound = (userName, questionGenerator, roundLimitCounter = 0) => {
  if (roundLimitCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const questionPack = questionGenerator();
  console.log(`Question: ${questionPack.question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = checkUserAnswer(questionPack.answer, userAnswer);
  if (!result) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionPack.answer}".\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');

  return startRound(userName, questionGenerator, roundLimitCounter + 1);
};
