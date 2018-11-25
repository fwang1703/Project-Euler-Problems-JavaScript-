/* Finding the difference between the sum of the squares
/ and the square of the sum of the first 100 natural numbers
*/

// Function used in finding the sum of the squares
function sumOfSquares(number)
{
  let sum = 0;
  for (let i = 1; i <= number; i++)
  {
    sum+= Math.pow(i,2);
  }
  return sum;
}

// Function used in finding the square of the sums
function squareSum(number)
{
  let sum = 0;
  for (let i = 1; i <= number; i++)
  {
    sum+= i;
  }
  let square = Math.pow(sum,2);
  return square;
}

// calculating the difference
let num = 100;
let difference = squareSum(num) - sumOfSquares(num);
console.log(difference);
