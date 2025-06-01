const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
const maxAge = Math.max(...input.map((person) => person.age));
const minAge = Math.min(...input.map((person) => person.age));
console.log(maxAge)
console.log(minAge)
const diff=maxAge-minAge
console.log(diff)
