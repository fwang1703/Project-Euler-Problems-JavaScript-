/* Using the fibonacci sequence to values less than 4,000,000
Find the sum of all the even numbers
*/

let sequence = [1,2];
let i = sequence[sequence.length - 1];
let sum = 0;

// While loop creating the fibonacci sequence
while (i < 4000000)
{
  i+= sequence[sequence.length - 2];
  sequence.push(i);
}
// Removing the last element of the sequence as it is greater than 4,000,000
sequence.pop();

let length = sequence.length;
let j = 0;

// Checking for even numbers and summing them together
while (j < length)
{
  if (sequence[j] % 2 == 0)
  {
    sum+= sequence[j];
    j++;
  }
  else
  {
    j++;
  }
}

console.log(sum);
