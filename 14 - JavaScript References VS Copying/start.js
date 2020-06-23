const team1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team2 = [...team1];
const team3 = [...team1];

team1[3] = 'Jeff';
team3.push('Karen')

console.log({team1}, {team2}, {team3});
// team1 is updated but team2 is unaffected
// team3 is updated but team1 is unaffected


// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

const person2 = Object.assign({}, person);
console.log({person}, {person2})
person2.name = 'Tyler'
console.log({person}, {person2})
// person2 is updated but person is unaffected 
