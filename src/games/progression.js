import getRandom from '../utils';
import startGame from '..';

const elementsCount = 10;

const generateProgression = (start, step) => {
  const iter = (progression, acc = 1) => {
    if (progression.length === elementsCount) {
      return progression;
    }
    if (progression.length === 0) {
      return iter([start]);
    }

    const nextNumber = start + step * acc;
    return iter([...progression, nextNumber], acc + 1);
  };

  return iter([]);
};

const generateGameData = () => {
  const start = getRandom(1, 50);
  const progressionStep = getRandom(-10, 20);
  const progression = generateProgression(start, progressionStep);
  const hiddenElementIndex = getRandom(0, progression.length - 1);

  const prograssionWithHiddenElement = progression.slice();
  const correctAnswer = prograssionWithHiddenElement.splice(
    hiddenElementIndex,
    1,
    '..',
  );

  const readyProgression = prograssionWithHiddenElement.join(' ');

  const gameData = {
    question: readyProgression,
    answer: String(correctAnswer),
  };

  return gameData;
};

const description = 'What number is missing in the progression?';

export default () => startGame(description, generateGameData);
