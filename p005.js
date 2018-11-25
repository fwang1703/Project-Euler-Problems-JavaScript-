// Finding the smallest number which is divisible by all numbers from 1 to 20

// Function calculating whether a number is divisible by 1-20
function evenlyDivisible(num)
{
  let counter = 0;

  for (let i = 1; i <= 20; i++)
  {
    if (num % i != 0)
    {
      counter++;
    }
  }

  if (counter === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

let number = 1;

// Checking through numbers to find the first one divisible by 1-20
while (evenlyDivisible(number) === false)
{
  number++;
}

console.log(number);
