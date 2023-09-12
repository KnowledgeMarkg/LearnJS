// Find Prime Number between 55 to 100


for (let number = 55; number <= 75; number++) {
    if (number < 2) continue; // Skip numbers less than 2 (not prime)
  
    let isPrime = true;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(`The number ${number} is prime `);
    }
  }
  