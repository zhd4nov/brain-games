import { sayWelcome, tellRules, requestUserName, greetUser, startGame } from './logic';

// main flow export:
export const start = (gameType) => {
  sayWelcome();
  tellRules(gameType);

  const userName = requestUserName();
  greetUser(userName);

  startGame(gameType, userName);

  return;
};
