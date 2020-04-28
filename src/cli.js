import readlineSync from 'readline-sync';

export const run = () => {
  console.log('Welcome to Brain Games');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
};

export default { run };
