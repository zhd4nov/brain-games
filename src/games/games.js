import { requestUserName} from '..';

export const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');

  const userName = requestUserName();
  console.log(`Hello, ${userName}!`);

  return;
};
