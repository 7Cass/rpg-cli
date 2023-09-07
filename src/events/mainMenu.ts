import inquirer from "inquirer";
import eventHandler from "../handlers/eventHandler";
import chalk from "chalk";
import saveManager from "../handlers/saveManager";

export default async function() {
    console.log('This is the main menu.');
    const choices = ['New Game', 'Exit Game'];

    const save = await saveManager.loadFromFile('save.json');

    if (save) {
        choices.unshift('Load Game');
    }

    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices,
        }
    ]);
    
    switch (action) {
        case 'New Game':
            await eventHandler.trigger('createCharacter');
            break;
        case 'Load Game':
            await eventHandler.trigger('startGame');
        case 'Exit Game':
            console.log(chalk.green('Até logo!'));
            process.exit();
        default:
            break;
    }
};