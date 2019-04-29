"use strict";

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }

  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  if (name === NaN || age === undefined) {
    throw new Error("You did not enter a valid name or age.");
  } 
  else if (typeof name !== 'string' || typeof age !== 'number') {
    throw new Error("Name must be a string. Age must be a number")
  }
    else {
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}
}

try {
  const greeting1 = createGreeting("Chris", 29);
  console.log(greeting1);
} catch (e) {
  console.log(e.message);
}
