
/*
const { first, last, credit } = person;  

deconstruction, This is called object destructuring, introduced in ES6 (modern JavaScript). It lets you extract multiple values from an object in a single, clean line.

Spaces don’t affect function, but they match modern JS style guides (Prettier, Airbnb, Google).
makes no difference to logic, but makes a big difference to readability.

Legacy Code	                              Modern Version 
const f = person.first;	            const { first, last, credit } = person;
const l = person.last;	
const c = person.credit;	

people.forEach((person, index) => {
  Loops through the people array, giving you:
  person = each object in the array
  index = the number (0, 1, 2)
  
  legacy 
  for (let i = 0; i < people.length; i++) {
  const person = people[i];