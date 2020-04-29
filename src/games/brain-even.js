import { play } from '../cli.js';
import { generateNumber } from '../helpers.js';

const isEven = (number) => number % 2 === 0;

export const prepare = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRoundData = () => {
    const questionNum = generateNumber();
    const correctAnswer = isEven(questionNum) ? 'yes' : 'no';

    return { answer: correctAnswer, question: questionNum };
  };

  play(task, generateRoundData);
};

export default { prepare };
