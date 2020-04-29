import { play } from '../cli.js';
import { generateNumber } from '../helpers.js';

const chooseOperation = () => {
  const operations = ['+', '-', '*'];
  const index = generateNumber(0, operations.length - 1);
  return operations[index];
};

const getCorrectAnswer = (a, b, operation) => {
  let answer;
  switch (operation) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default: break;
  }
  return `${answer}`;
};

export const prepare = () => {
  const task = 'What is the result of the expression?';
  const generateRoundData = () => {
    const a = generateNumber();
    const b = generateNumber();
    const operation = chooseOperation();
    const correctAnswer = getCorrectAnswer(a, b, operation);
    const question = `${a} ${operation} ${b}`;

    return { question, answer: correctAnswer };
  };

  play(task, generateRoundData);
};

export default { prepare };
