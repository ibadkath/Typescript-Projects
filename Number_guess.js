import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
let score = 0;
async function startLoop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                name: "restart",
                type: "list",
                message: chalk.yellow("Do you want to continue?"),
                choices: ["Yes", "No"]
            }
        ]);
    } while (again.restart === "Yes");
}
startLoop();
async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 11);
    let hint;
    if (guessNum % 2 == 0) {
        hint = "Hint: The number is even. ";
    }
    else {
        hint = "Hint: the number is odd.";
    }
    const answer = await inquirer.prompt([
        {
            name: "Guess",
            type: "number",
            message: gradient.rainbow(`Guess a number between 1 to 10 (${hint})`)
        }
    ]);
    console.log(chalk.green(`Your guess is ${answer.Guess} and system answer is ${guessNum}`));
    if (answer.Guess === guessNum) {
        score++;
        console.log(chalk.blueBright(`Congratulations! Your answer is correct. Your score is ${score}`));
    }
    else {
        console.log(chalk.redBright(`Your Guess is wrong. Your score is ${score}. Try again`));
    }
}
