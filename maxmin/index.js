let person =
[
    {
        name : "John",
        age : 35,
    },
    {
        name : "Bill",
        age : 23,
    },
    {
        name : "Bob",
        age : 17,
    },
    {
        name : "Jack",
        age : 20,
    }
];
let max=person[2];
let min=person[2];
for (let i = 0; i < person.length; i++) 
{
    if (person[i].age > max.age) 
    {
        max = person[i];
    } else if(person[i].age > max.age){
        min=person[i];
    }
}
console.log(max);
console.log(min);