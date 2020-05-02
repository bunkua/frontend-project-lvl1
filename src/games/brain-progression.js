import play from '../cli.js';
import { generateNumber } from '../helpers.js';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const generateRoundData = () => {
  const start = generateNumber(1, 100);
  const step = generateNumber(1, 12);

  const progression = generateProgression(start, step, progressionLength);

  const hiddenElementId = generateNumber(0, progressionLength);
  const correctAnswer = progression[hiddenElementId];
  progression[hiddenElementId] = '..';

  return { question: progression, answer: correctAnswer };
};

const runGame = () => play(task, generateRoundData);

export default runGame;
