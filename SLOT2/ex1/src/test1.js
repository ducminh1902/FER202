let add =(a,b) =>a+b;
//function 1:
console.log(add(5,9));
let greet = (name,timeOfDay) =>{
    console.log(`Good ${timeOfDay},${name}!`);
}
greet(`Alice`,`morning`)
//output:Good Morning ,Alice!
greet(`Bob`,`evening`)
//output:Good evening,Bob!

//function 2:
let square = num =>{
    return num *num;
};
console.log(square(5));
console.log(square(6));
//function 3:
let sayHello = () =>{
    console.log("Hello there!");
}

sayHello();//Output: Hello there!

//function 4:
let person ={
    name:`John`,
    age:30,
    greet: () => {
        console.log(`Hello,my name is ${this.name} and I'm ${this.age} years old`);
    }
};

//test
person.greet(person.name, person.age);