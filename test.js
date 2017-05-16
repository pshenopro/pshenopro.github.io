var lol = 6;

var person = {
  name: 'syka',
  sex: 'male',
  age: 66,
}
person.money = 2000 + "$";
person.money = "%";
delete person.age
delete person.money
console.log(person);
console.log(person.hasOwnProperty("name"));
console.log(person.sex);
console.log(person.age);
console.log("sex" in person);
console.log("age" in person);

var score = function () {
  return "How score km?" + this.name;
}

var obj = {
  mars: 2,
  venera: 552,
  score: -2,
}
console.log(obj.score);



var obj = {};

console.log(Object.isExtensible(obj));
