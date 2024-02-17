#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const apiLink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let quiz = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let x = await quiz(apiLink);
let startQuiz = async () => {
    let score = 0;
    let uname = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is your name?"
    });
    for (let i = 0; i < x.length - 1; i++) {
        let answers = [...x[i].incorrect_answers, x[i].correct_answer];
        let ans = await inquirer.prompt({
            name: "quizs",
            type: "list",
            message: x[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.quizs === x[i].correct_answer) {
            ++score;
            console.log(chalk.bold.green("Correct \u2713"));
        }
        else {
            console.log(`Correct answer is ${chalk.bold.red(x[i].correct_answer)}`);
        }
    }
    console.log(` Your score is ${chalk.bold.yellow(score)} out of ${chalk.yellow.bold(x.length - 1)}`);
};
startQuiz();
