const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number of seconds: ', (input) => {
  let timeLeft = parseInt(input);

  console.log(`Time remaining: ${timeLeft}`);

  const intervalId = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      console.log(`Time remaining: ${timeLeft}`);
    } else {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  setTimeout(() => {
    rl.on('line', (input) => {
      if (input.trim() === 's') {
        clearInterval(intervalId);
        console.log("Timer stopped by user.");
        rl.close();
      }
    });
  }, 500); 
});