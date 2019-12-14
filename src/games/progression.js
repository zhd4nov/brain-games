import generateRandom from '../utils';
import startGame from '..';

const generateProgression = (length, start, step) => {
  const bunchUpNumbers = (progression) => {
    if (progression.length === length) {
      return progression;
    }
    if (progression.length === 0) {
      return bunchUpNumbers([start]);
    }

    const nextNumber = progression[progression.length - 1] + step;
    return bunchUpNumbers([...progression, nextNumber]);
  };

  return bunchUpNumbers([]);
};

const generateGameData = () => {
  const startNumber = generateRandom(1, 50);
  const progressionStep = generateRandom(-10, 20);

  const progressionArray = generateProgression(10, startNumber, progressionStep);
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

export default () => startGame(progressionRulles, generateGameData);
