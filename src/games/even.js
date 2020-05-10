import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = generateNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { answer: correctAnswer, question };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
