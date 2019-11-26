import readlineSync from 'readline-sync';

const startGreet = () => {
    console.log('Welcome to the Brain Games!');
};

const requestUserName = () => readlineSync.question('\nWhat is your name, human? ');

const greetUser = (userName) => {
  console.log(`Hmm... Okay. Hello, ${userName}!`);
};

export const startGame = () => {
  startGreet();

  const userName = requestUserName();
  greetUser(userName);
  return;
};

// brain-even sub-functions:

const tellRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateRandomQuestionNumber = (max = 150) => {
  const perhapsNumber = Math.floor(Math.random() * Math.floor(max));
  const readyNumber = perhapsNumber !== 0 ? perhapsNumber : generateRandomQuestionNumber();

  return readyNumber;
};

const askQuestion = (questionNumber) => console.log(`\nQuestion: ${questionNumber}`);

const isEven = (number) => number % 2 === 0;

const getAnswer = () => readlineSync.question('Your answer: ');

const startRound = (questionNumber) => {
  askQuestion(questionNumber);
  const userAnswer = getAnswer();
  const checkAnswer = (answer) => {
    if (answer === 'yes' && isEven(questionNumber)) {
      return ['success', `${userAnswer}`];
    } else if (answer === 'no' && !isEven(questionNumber)) {
      return ['success', `${userAnswer}`];
    } else {
      return ['fail', `${userAnswer}`];
    }
  };

  return checkAnswer(userAnswer);
};
// brain-even export:

export const startBrainEven = () => {
  startGreet();
  tellRules();

  const userName = requestUserName();
  greetUser(userName);

  let successCounter = 0;
  while (successCounter < 3) {
    const questionNumber = generateRandomQuestionNumber();
    const roundResult = startRound(questionNumber);
    const [result, answer] = roundResult;
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    if (result === 'success') {
        successCounter += 1;
    } else {
      console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations ${userName}!`);
  return;
};
