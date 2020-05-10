import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'What is the result of the expression?';

const chooseOperation = () => {
  const operations = ['+', '-', '*'];
  const index = generateNumber(0, operations.length - 1);
  return operations[index];
};

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`No such operation ${operation}`);
  }
};

const generateRoundData = () => {
  const a = generateNumber();
  const b = generateNumber();
  const operation = chooseOperation();
  const correctAnswer = getCorrectAnswer(a, b, operation).toString();
  const question = `${a} ${operation} ${b}`;

  return { question, answer: correctAnswer };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
