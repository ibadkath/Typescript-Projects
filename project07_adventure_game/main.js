#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name:"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    choices: ["Skeleton", "Zombie", "Dragon"],
    message: "Select your opponent"
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            choices: ['Attack', 'Drink', 'Run'],
            message: "Select"
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel === 0) {
                    console.log(chalk.bold.red('You loose, better luck next time'));
                    process.exit();
                }
            }
            if (num === 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel === 0) {
                    console.log(chalk.bold.green('You Win'));
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink the health and your fuel is ${p1.fuel}`));
        }
        else {
            console.log(chalk.bold.red('You loose, better luck next time'));
            process.exit();
        }
    }
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            choices: ['Attack', 'Drink', 'Run'],
            message: "Select"
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel === 0) {
                    console.log(chalk.bold.red('You loose, better luck next time'));
                    process.exit();
                }
            }
            if (num === 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel === 0) {
                    console.log(chalk.bold.green('You Win'));
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink the health and your fuel is ${p1.fuel}`));
        }
        else {
            console.log(chalk.bold.red('You loose, better luck next time'));
            process.exit();
        }
    }
    if (opponent.select === "Dragon") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            choices: ['Attack', 'Drink', 'Run'],
            message: "Select"
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel === 0) {
                    console.log(chalk.bold.red('You loose, better luck next time'));
                    process.exit();
                }
            }
            if (num === 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel === 0) {
                    console.log(chalk.bold.green('You Win'));
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink the health and your fuel is ${p1.fuel}`));
        }
        else {
            console.log(chalk.bold.red('You loose, better luck next time'));
            process.exit();
        }
    }
} while (true);
