// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const revStr = input=>{ 
return input=== '' ? '' : revStr(input.slice(1)) + input[0];
}
const string = "hello world";
const output = revStr(string);
console.log(output);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const posNum = numbers => {
   return numbers.reduce((x, y) => y > 0 ? x + y : x, 0);
}
const num = [2, -5, 10, -3, 7];
const result = posNum(num);
console.log(result);


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers

const twoNumSum=(num, target) =>{
   let num1 = 0;
   let num2 = num.length - 1;
   while (num1 < num2) {
      const sum = num[num1] + num[num2];
  
      if (sum === target) return [num1, num2];
      sum < target ? num1++ : num2--;
    }
   return ;
 }
 const nums = [1, 3, 6, 8, 11, 15];
 const targetValue = 9;
 const totalResult = twoNumSum(nums, targetValue);
 console.log(totalResult); 

 

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calNum = (num1, operator, num2) => {

   if (isNaN(num1) || isNaN(num2)) {
       return "Add number";
   }

   const result = operator === '+'? num1 + num2 : operator === '-'
       ? num1 - num2 : operator === '*'
       ? num1 * num2 : operator === '/'
       ? num1 / num2 : "Add operator";
   
   return result;
};
const num1 = 4;
const operator = '/';
const num2 = 2;

const total = calNum(num1, operator, num2);
console.log(total);



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 
const ranPass=(length)=> {
  
   const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowLetters = "abcdefghijklmnopqrstuvwxyz";
   const digits = "0123456789";
   const specalCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";
 
   const fullPass = upLetters + lowLetters + digits + specalCharacters;
 
  let password = "";
 
   for (let i = 0; i < length; i++) {
     const pass = Math.floor(Math.random() * fullPass.length);
     password += fullPass[pass];
   }
 
   return password;
 }
 const passLength = 8;
 const password = ranPass(passLength);
 console.log(password);
 

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToNum=(romanNum)=> {
   const romans = {'I': 1,'V': 5, 'X': 10,'L': 50};
   let total = 0;
   let prevValue = 0;
 
   for (let i = romanNum.length - 1; i >= 0; i--) {
     const rom = romanNum[i];
     const value = romans[rom];
     total += value >= prevValue ? value : -value;
     prevValue = value;
   }
   return total;
 }
 console.log(romanToNum("XXI")); 


//  Task 8:Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


const secSmallNum=(num)=> {
   let smallest = Infinity;
   let secSmallest = Infinity;
 
   for (let i = 0; i < num.length; i++) {
     num[i] < smallest ? (secSmallest = smallest, smallest = num[i])
          : (num[i] < secSmallest && num[i] !== smallest) && (secSmallest = num[i]);
   }
   return secSmallest;
 }
 const numbers = [5, 8, 1, 3,];
 const secSmallestNum = secSmallNum(numbers);
 console.log(secSmallestNum); 
  