import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, answer: correctAnswer };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
