import { sayWelcome, tellRules, requestUserName, greetUser, startGame } from './engine';

// main flow export:
export const start = (gameType) => {
  sayWelcome();
  tellRules(gameType);

  const userName = requestUserName();
  greetUser(userName);

  startGame(gameType, userName);

  return;
};
