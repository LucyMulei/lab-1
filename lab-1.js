// Question 1: Define a function called "calculateArea" that takes two parameters, "length" and "width", and returns the area of a rectangle.
function calculateArea(length, width) {
  return length * width;
}
//i am not sure about this second one but here goes
function calculateArea(length, width) {
  area = length * width;
  return area;
}
// Question 2: Call the "calculateArea" function with arguments 5 and 3, and store the result in a variable called "rectangleArea".
const rectangleArea = calculateArea(5, 3);
console.log("The area is", rectangleArea);
// Question 3: Define a function called "greetUser" that takes one parameter, "name", and logs a greeting message to the console using that name eg. "Hello, John!".
function greetUser(name) {
  console.log("Hello", +name + "!");
}

// Question 5: Define a global variable called "globalVar" and assign it the value "I'm a global variable".
let globalVar = "I am a global variable.";

// Question 6: Define a function called "localScopeExample" that logs the value of the global variable "globalVar" and defines a local variable called "localVar" with the value "I'm a local variable" and logs it to the console.
function localScopeExample() {
  console.log(globalVar)
let localVar = "I am a local variable"
console.log(localVar)

}

// Question 8: Try to access the "localVar" variable outside of the "localScopeExample" function. What happens?
//uncaught referenceerror localVar not defined is the error(I cant copy and paste from node hehe)

// localVar is not defined because it is a local variable and only exists within the localScopeExample function.

// Question 9: Write an if-else statement that checks if a number is positive, negative, or zero. Log the result to the console.
let number = 10;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is a zero");
}

// Question 10: Write a while loop that asks the user to enter a number greater than 100. Keep asking until the user enters a valid number.
let number=0
while(number<=100){
  number=(prompt(Enter number above 100))

}
console.log("You have entered a number greater than 100!")
