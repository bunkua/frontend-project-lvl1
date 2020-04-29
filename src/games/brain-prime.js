import { play } from '../cli.js';
import { generateNumber } from '../helpers.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let x = 2; x <= Math.sqrt(number); x += 1) {
    if (number % x === 0) {
      return false;
    }
  }

  return true;
};

export const prepare = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRoundData = () => {
    const questionNum = generateNumber(1, 100);
    const correctAnswer = isPrime(questionNum) ? 'yes' : 'no';

    return { question: questionNum, answer: correctAnswer };
  };

  play(task, generateRoundData);
};

export default { prepare };
