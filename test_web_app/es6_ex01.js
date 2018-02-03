const str = "10, 20, 30, 40".split(", ");
let sum = 0;
str.forEach(w => sum += parseInt(w));
console.log(`sum : ${sum}`);
