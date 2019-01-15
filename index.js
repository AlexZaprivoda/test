var num = prompt("number ?");

var k50 = 0; //50
var k25 = 0; //25
var k10 = 0; //10

if (num) {
  k50 = parseInt(num / 50);
  num = num - k50 * 50;

  k25 = parseInt(num / 25);
  num = num - k25 * 25;

  k10 = parseInt(num / 10);
  num = num - k10 * 10;
  //  console.log(k50, k25, k10, num);
  if (k50 > 0) {
    console.log("Купюр по 50:", k50);
  }
  if (k25 > 0) {
    console.log("Купюр по 25:", k25);
  }
  if (k10 > 0) {
    console.log("Купюр по 10:", k10);
  }
  if (num > 0) {
    console.log("Остаток:", num);
  }
} else {
  alert("не верно");
}
