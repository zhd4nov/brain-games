import generateRandom from '../utils';
import startGame from '..';

const generateProgression = (length = 10) => {
  const startNumber = generateRandom(1, 50);
  const progressionStep = generateRandom(-10, 20);

  const bunchUpNumbers = (progression = []) => {
    if (progression.length === length) {
      return progression;
    }

    const nextNumber = progression[progression.length - 1] + progressionStep;
    return bunchUpNumbers([...progression, nextNumber]);
  };

  return bunchUpNumbers([startNumber]);
};

const prepareQuestionProgressive = () => {
  const progressionArray = generateProgression(10);
  const randomHiddenElementIndex = generateRandom(0, progressionArray.length);

  const prograssionWithHiddenElement = progressionArray.slice();
  const hiddenElement = prograssionWithHiddenElement.splice(randomHiddenElementIndex, 1, '..');

  const correctAnswer = String(hiddenElement);
  const readyProgression = prograssionWithHiddenElement.join(' ');

  const questionPack = {
    question: readyProgression,
    answer: correctAnswer,
  };

  return questionPack;
};

const progressionRulles = 'What number is missing in the progression?';

export default () => startGame(progressionRulles, prepareQuestionProgressive);
