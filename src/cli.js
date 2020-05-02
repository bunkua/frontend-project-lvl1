import readlineSync from 'readline-sync';

const lastRound = 3;

const play = (task, generateRoundData) => {
  console.log('Welcome to Brain Games');
  console.log('May I have your name?');
  const playerName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${playerName}`);
  console.log(task);

  for (let i = 1; i <= lastRound; i += 1) {
    const { question, answer } = generateRoundData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer :(. Correct answer is "${answer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}. You're winner!`);
};

export default play;
