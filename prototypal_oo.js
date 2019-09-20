const character = {
  speak: (...x) => console.log(...x)
};

character.speak('hi', 'there');

const Person = {
  ...character,
  eat: x => console.log('eating', x)
};

Person.eat('shit');

// Prototypal inheritance
const PersonPP = function(name) {
  this.name = name;
  this.greet = () => console.log('hi ', name);
};

PersonPP.prototype.eat = function(food) {
  console.log(this.name + ' is eating ' + food);
};
const harry = new PersonPP('anthony');
harry.greet();
harry.eat('Banana');
