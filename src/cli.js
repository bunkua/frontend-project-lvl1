import readlineSync from 'readline-sync';

export const play = (task, generateRoundData) => {
  const maxRounds = 3;

  console.log('Welcome to Brain Games');
  console.log('May I have your name?');
  const playerName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${playerName}`);
  console.log(task);

  for (let i = 0; i < maxRounds; i += 1) {
    const gameData = generateRoundData();
    console.log(`Question: ${gameData.question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === gameData.answer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer :(. Correct answer is "${gameData.answer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}. You're winner!`);
};

export default { play };
