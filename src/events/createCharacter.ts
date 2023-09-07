import inquirer from "inquirer";
import saveManager from "../handlers/saveManager";
import eventHandler from "../handlers/eventHandler";

export default async function() {
    console.log('Create character');

    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        },
        {
            type: 'list',
            name: 'gender',
            message: "What's your gender?",
            choices: ['Male', 'Female']
        },
        {
            type: 'number',
            name: 'age',
            message: "How old are you?",
            default: 18,
        },
        {
            type: 'list',
            name: 'class',
            message: 'Choose your class:',
            choices: ['Warrior', 'Mage', 'Rogue']
        }
    ];

    const asnwers = await inquirer.prompt(questions);

    const characterSave = {
        ...asnwers,
        level: 1,
        experience: 0,
        balance: 15
    }

    saveManager.saveToFile('save.json', characterSave);

    await eventHandler.trigger('startGame');

    console.log(asnwers);
};