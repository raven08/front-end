let person =[
    {
        name : "john",
        age : 35,
    },
    {
        name : "bill",
        age : 23,
    },
    {
        name : "Bob",
        age : 17,
    },
    {
        name : "jack",
        age : 20,
    }
];
let max;
let min;
var maxAge;
for(let i in person){
  if(!max || person[i].age > max.age){
    max = person[i];
  }else if(!min || person[i].age < min.age){
    min = person[i];
  }
}


console.log(max);
console.log(min);





