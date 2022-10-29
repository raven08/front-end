let numbers = [8, 1, 2, 5, 10, 6]

numbers.forEach(function(value, index, array){
    console.log("Value: ", value);
    console.log("Index: ", index);
    console.log("Array: ", array);
});

let hasil = numbers.map (function(item){
    return item*2;
});
console.log("Array Lama: ", numbers);
console.log("Array Baru: ", hasil);