// Random number generator game function
function generateRandomNumber() {
    const minNum = 1;
    const maxNum = 100;
    const number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    // Show the result in an alert box
    alert(`The random number generated is ${number}.`);
  }
  
