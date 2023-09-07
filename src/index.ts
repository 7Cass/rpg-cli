import chalk from 'chalk';
import eventHandler from './handlers/eventHandler';
import interactionManager from './handlers/interactionManager';

async function game(): Promise<void> {
  await eventHandler.loadEvents();

  await interactionManager.mainMenu();
}

console.log(chalk.bold.green('Welcome to EverDark!'));
game();
