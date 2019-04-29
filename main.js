"use strict";

function getYearOfBirth (age) {
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}

function createGreeting(name, age) {
const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

const greeting1 = createGreeting("Chris", "29");
console.log(greeting1);

