var people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 }, 
  { name: 'John', age: 40 }, 
  { name: 'Ann', age: 19 }, 
  { name: 'Elisabeth', age: 16 }
];

// Lấy ra Elisabeth để test
const person = people.find(p => p.name === "Elisabeth");

// Destructuring với address mặc định
const {
  address: {
    street = "Unknown Street",
    city = "Unknown City"
  } = {}
} = person;

console.log(street); // Unknown Street
console.log(city);   // Unknown City
