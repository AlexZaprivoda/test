// var num = prompt("number ?");

// var k50 = 0; //50
// var k25 = 0; //25
// var k10 = 0; //10

// if (num) {
//   k50 = parseInt(num / 50);
//   num = num - k50 * 50;

//   k25 = parseInt(num / 25);
//   num = num - k25 * 25;

//   k10 = parseInt(num / 10);
//   num = num - k10 * 10;
//   //  console.log(k50, k25, k10, num);
//   if (k50 > 0) {
//     console.log("Купюр по 50:", k50);
//   }
//   if (k25 > 0) {
//     console.log("Купюр по 25:", k25);
//   }
//   if (k10 > 0) {
//     console.log("Купюр по 10:", k10);
//   }
//   if (num > 0) {
//     console.log("Остаток:", num);
//   }
// } else {
//   alert("не верно");
// }

//----------------------------------------

// var a = Math.random();
// a = parseInt(a * 100);
// console.log(a);

// //parseInt(Math.random() * 25) + 25
// //parseInt(Math.random() * 25)

// if ((a >= 0) & (a <= 100)) {
//   console.log("0-100");
// }

// if ((a >= 25) & (a <= 50)) {
//   console.log("25-50");
// }

//------------------------------

// var num = prompt("number ?");

// var k50 = 0; //50
// var k25 = 0; //25
// var k10 = 0; //10

// if (num) {
//   k50 = parseInt(num / 50);
//   num = num - k50 * 50;

//   k25 = parseInt(num / 25);
//   num = num - k25 * 25;

//   k10 = parseInt(num / 10);
//   num = num - k10 * 10;
//   //  console.log(k50, k25, k10, num);
//   //   if (k50 > 0) {
//   //     console.log("Купюр по 50:", k50);
//   //   }
//   //   if (k25 > 0) {
//   //     console.log("Купюр по 25:", k25);
//   //   }
//   //   if (k10 > 0) {
//   //     console.log("Купюр по 10:", k10);
//   //   }
//   //   if (num > 0) {
//   //     console.log("Остаток:", num);
//   //   }

//   //----------------

//   //----------------

//   switch (!!k50) {
//     case true:
//       console.log("Купюр по 50:", k50);
//       break;
//   }

//   switch (!!k25) {
//     case true:
//       console.log("Купюр по 25:", k25);
//       break;
//   }

//   switch (!!k10) {
//     case true:
//       console.log("Купюр по 10:", k10);
//       break;
//   }

//   switch (!!num) {
//     case true:
//       console.log("Остаток:", num);
//       break;
//   }
// } else {
//   alert("не верно");
// }

//-------------------------

// var mes = prompt("mes ?");

// var num2 = prompt("number2 ?");
// var num2 = num2 / 2;
// switch (num2) {
//   case 0:
//     console.log("Четное");
//     break;
//   default:
//     console.log("Не Четное");
// }
//----------------------------
// var age = prompt("age ?");
// var sum = prompt("sum ?");

// // if (age && sum) {
// //   console.log("ssss");
// // }

// if (age && sum) {
//   alert("ne chisla");
// } else if (age >= 65) {
//   sum = sum * 0.5;
//   console.log(sum);
// } else console.log(sum);
//----------------------------
// var computerNum = localStorage.getItem("keyComputerNum");

// computerNum = computerNum ? +computerNum : Math.round(Math.random() * 10);
// var userNum = +prompt("try ?");
// if (userNum === computerNum) {
//   alert("win");
//   localStorage.removeItem("keyComputerNum");
// } else {
//   alert("looser");
//   localStorage.setItem("keyComputerNum", computerNum);
// }

// console.log("keyComputerNum");

// //написать осмысленный комментарий к каждой строке кода

// //кол-во удачные и  не удачных в body

//---------------------
var studNum = prompt("Сколько студентов ?");

studNum = studNum ? +studNum : Math.round(Math.random() * studNum);
console.log(studNum);

//---------------------
