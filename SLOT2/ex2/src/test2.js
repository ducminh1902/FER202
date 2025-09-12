const number = [1,2,3,4,5];
number.map(n =>{
    console.log(n*n)
})

// Duyệt dnah sách object
const people =[
    {id:1,name:`An`,age:18},
    {id:2,name:`Bình`,age:22},
    {id:3,name:`Chi`,age:25},
    {id:4,name:`Dung`,age:19}
];

const over20 = people.filter(person => person.age >20);

over20.forEach(p=>{
    console.log(`ID:${p.id},Name:${p.name},Age: ${p.age}`);
})