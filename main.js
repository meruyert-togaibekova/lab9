// JavaScript Functions - Lab 9
// Meruyert Togaibekova

// Problem 6 - A function that returns the sum of squares of two given numbers

function sum_of_squares (x, y) {
  return (x*x + y*y)
}

// Problem 10 - A function to check whether two given numbers are equal or not

function check_equality (x, y) {
  if (x == y) {
    console.log("Two given numbers are equal")
  } else {
    console.log("Two given numbers are not equal")
  }
}

// Problem 11 - A function to check whether a given number is even or odd

function even_or_odd (x) {
  if (x % 2 == 0) {
    console.log("The given number is even")
  } else {
    console.log("The given number is odd")
  }
}

// Function invocations

let problem1 = sum_of_squares (1, 2)
console.log(problem1)
let problem2 = check_equality (1, 2)
let problem3 = even_or_odd (17)
