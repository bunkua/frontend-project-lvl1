import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRoundData = () => {
  const a = generateNumber();
  const b = generateNumber();
  const correctAnswer = getGcd(a, b).toString();
  const question = `${a} and ${b}`;
  return { question, answer: correctAnswer };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
