import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const questionNum = generateNumber();
  const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
  return { answer: correctAnswer, question: questionNum };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
