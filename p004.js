// Finding the largest palindrome product between two 3 digit numbers

let number = 0;
let palindrome = 0;
let array = [];
let i = 100;
let j = 100;

// Creating an array of palindrome numbers
for (i = 100; i<=999;i++)
{
  for (j = 100; j <= 999; j++)
  {
    number = i*j;
    palindrome = checkPalindrome(number);
    if (palindrome == true)
    {
      array.push(number);
    }
  }
}

let largest = Math.max(...array);

console.log(largest);

// function which checks if a number is palindrome
function checkPalindrome (number)
{
  let temp = number;
  let final = 0;
  let rem = 0;

  while (number > 0)
  {
    rem = number%10;
    number = parseInt(number/10);
    final = final*10 + rem;
  }

  if (final == temp)
  {
    return true;
  }
  else
  {
    return false;
  }
}
