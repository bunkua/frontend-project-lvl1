import { play } from '../cli.js';
import { generateNumber } from '../helpers.js';

const getAnswer = (a, b) => {
  if (!b) {
    return `${a}`;
  }
  return getAnswer(b, a % b);
};

export const prepare = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const generateRoundData = () => {
    const a = generateNumber();
    const b = generateNumber();
    const correctAnswer = getAnswer(a, b);
    const question = `${a} and ${b}`;
    return { question, answer: correctAnswer };
  };

  return play(task, generateRoundData);
};

export default { prepare };
