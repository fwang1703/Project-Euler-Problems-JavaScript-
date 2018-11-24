// Finding the largest prime factor of a number

// Creating a function which finds the prime factors of a number
function getPrimeFactors (number)
{
  let primeFactors = [];

  // Checking if a number can be divided by 2
  while (number % 2 === 0)
  {
    primeFactors.push(2);
    number = number/2;
  }

  let sqrt = Math.sqrt(number);

  // Checking if divisble by other numbers which are less than the square root of the new number
  for (let i = 3; i <= sqrt; i++)
  {
    while (number % i === 0)
    {
      primeFactors.push(i);
      number = number / i;
    }
  }

  // If newest number is still greater than 2, it is also a prime factor
  if (number > 2)
  {
    primeFactors.push(number);
  }
  return primeFactors;
}

let number = 600851475143;
let primeFactors = getPrimeFactors(number);
console.log(primeFactors.pop());
