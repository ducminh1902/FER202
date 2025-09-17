const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];

// Lọc teen (13–19) rồi map sang "Name (Age)"
const teens = people
  .filter(p => p.age >= 13 && p.age <= 19)
  .map(p => `${p.name} (${p.age})`);

// In ra từng dòng
teens.forEach(t => console.log(t));
