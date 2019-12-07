import { prepareQuestionSingleNumber } from '../utils';
import startGame from '..';

const isEven = (number) => number % 2 === 0;

const prepareQuestionNumber = () => prepareQuestionSingleNumber(isEven);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => startGame(description, prepareQuestionNumber);
