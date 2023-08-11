const Persons = [
  { name: "Mr X", age: 20 },
  { name: "Mr Y", age: 22 },
  { name: "Mr Z", age: 24 },
];

const newPersonArray = Persons.map((person) => {
  person.age = person.age * 2;
  return person;
});

console.log(newPersonArray);
