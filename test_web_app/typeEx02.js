var str1 = "10, 20, 30, 40".split(", ");
var sum1 = 0;
str1.forEach(function (w) { return sum1 += w; });
console.log("sum : " + sum1);
