import * as readline from 'readline';
import chalk from 'chalk';
import inquirer from 'inquirer';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt: string): Promise<string> {
  return new Promise(resolve => rl.question(prompt, resolve));
}

async function loop(): Promise<void> {
  while (true) {
    console.log(chalk.bold.cyan('\n--- MENU PRINCIPAL ---'));
    console.log('1. ' + chalk.yellow('👀 - Explorar'));
    console.log('2. ' + chalk.yellow('🎒 - Ver inventário'));
    console.log('3. ' + chalk.yellow('📊 - Ver status'));
    console.log('4. ' + chalk.green('🚪 - Sair'));

    const { escolha } = await inquirer.prompt([
      {
        type: 'list',
        name: 'escolha',
        message: 'O que você gostaria de fazer?',
        choices: ['Explorar', 'Ver inventário', 'Ver status', 'Sair'],
      },
    ]);

    switch (escolha) {
      case 'Explorar':
        console.log(chalk.yellow('Você decide explorar a área ao redor...'));
        // Lógica de exploração
        break;
      case 'Ver inventário':
        console.log(chalk.yellow('Você verifica seus pertences...'));
        // Lógica do inventário
        break;
      case 'Ver status':
        console.log(chalk.yellow('Você confere sua condição atual...'));
        // Lógica para ver status
        break;
      case 'Sair':
        console.log(chalk.green('Até logo!'));
        rl.close();
        process.exit(0);
        break;
      default:
        console.log(chalk.red('Opção inválida!'));
    }
  }
}

console.log(chalk.bold.green('Bem-vindo ao RPG Textual!'));
loop();
