// Finding the sum of numbers for multiples of 3 and 5 between 1 and 1000

// Declaring variables
let sum = 0;
let  i = 1;

// While loop sorting through values from 1-1000
while (i < 1000)
{
// Checking if number is multiple of 3 or 5 and summing multiples
  if (i % 3 == 0 || i % 5 == 0)
  {
	  sum+=i;
    i++;
  }
  else
  {
    i++;
  }
}
console.log(sum);
