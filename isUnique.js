var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter((value, index, array) => array.indexOf(value) === index);

console.log(unique); // ['a', 1, 2, '1']