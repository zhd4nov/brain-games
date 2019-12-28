import getRandom from '../utils';
import startGame from '..';

const progressionLength = 10;

const generateProgression = (start, step) => {
  const iter = (progression, length) => {
    if (length === progressionLength) {
      return progression;
    }

    const nextNumber = start + step * length;
    return iter([...progression, nextNumber], length + 1);
  };

  return iter([], 0);
};

const generateGameData = () => {
  const start = getRandom(1, 50);
  const progressionStep = getRandom(-10, 20);
  const progression = generateProgression(start, progressionStep);
  const hiddenElementIndex = getRandom(0, progression.length - 1);

  const progressionWithHiddenElement = progression.slice();
  const correctAnswer = progressionWithHiddenElement.splice(
    hiddenElementIndex,
    1,
    '..',
  );

  const question = progressionWithHiddenElement.join(' ');

  const gameData = {
    question,
    answer: String(correctAnswer),
  };

  return gameData;
};

const description = 'What number is missing in the progression?';

export default () => startGame(description, generateGameData);
