// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// console.log(clients.length);

// clients[0] = "test1";
// clients[1] = "test2";
// clients[2] = "test3";

// console.log(clients);
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);

// for (let i = 0; i < numbersArray.length; i += 1) {
//   console.log(numbersArray[i]);
// }

// console.log(numbersArray);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax", "Po2ly"];
// const clientNameToFind = "Po2ly";
// let message = "Такого пользователя нет";

// for (const client of clients) {
//   console.log(client);

//   if (client === clientNameToFind) {
//     message = "Пользователь нашелся";
//     break;
//   }
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число  ${numbers[i]} больше чем ${threshold} `);
// }

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const name = "javascript это круто";
// console.log(name.split(" ").join(" "));

// const message = "JavaScript это интересно";
// console.log(message.split(" "));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Mango"));

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const itemRedFruits = "cranberries";

// const result = redFruits.includes(itemRedFruits);
// console.log(result);

// let total = result ? "Cсвпадение найдено" : "Совпадение не найдено";

// console.log(total);

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// numbers.pop(5);
// console.log(numbers);

// numbers.pop(4);
// console.log(numbers);

// numbers.pop(3);
// console.log(numbers);

// numbers.pop(2);
// console.log(numbers);

// numbers.pop(1);
// console.log(numbers);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// const push = clients.push("test");
// console.log(clients);

// const pop = clients.pop("Test");
// console.log(clients);

// const unSgift = clients.unshift("test");
// console.log(clients);

// const shift = clients.shift("Test");
// console.log(clients);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 4)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// clients.push("Test");
// clients.unshift("Test");
// const result = clients.join(" ")
// console.log(clients);
// console.log(result);

// // 1. Объявление функции multiply
// function multiply() {
//     // Тело функции
//     console.log("Это лог при вызове функции multiply");
//   }

//   // 2. Вызовы функции multiply
//   multiply(); // 'Это лог при вызове функции multiply'
//   multiply(); // 'Это лог при вызове функции multiply'
//   multiply(); // 'Это лог при вызове функции multiply'
// 1. Объявление параметров x, y, z

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }

//   // 2. Передача аргументов
//   multiply(2, 3, 5); // Результат умножения равен 30
//   multiply(4, 8, 12); // Результат умножения равен 384
//   multiply(17, 6, 25); // Результат умножения равен 2550

// function multiply(x, y, z) {
//     console.log("Код до return выполняется как обычно");

//     // Возвращаем результат выражения умножения
//     return x * y * z;

//     console.log("Этот лог никогда не выполнится, он стоит после return");
//   }

//   // Результат работы функции можно сохранить в переменную
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30

//   result = multiply(4, 8, 12);
//   console.log(result); // 384

//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

// function multily(x, y, s) {
//   console.log("Просто консоль лог");

//   return x + y * s;
// }

// let result = multily(2, 5, 10);
// console.log(result);

// result = multily(54, 45, 4);
// console.log(result);

// result = multily(54, 45, 3);
// console.log(result);

// result = multily(1, 1, 2);
// console.log(result);

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }

//   console.log("Лог до вызова функции multiply");
//   multiply(2, 3, 5); // Результат умножения равен 30
//   console.log("Лог после вызова функции multiply");

//   // Последовательность логов в консоли
//   // "Лог до вызова функции multiply"
//   // "Результат умножения равен 30"
//   // "Лог после вызова функции multiply"

// function count(countFrom = 1, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//   for (let i = countFrom; i >= countTo; i -= step) console.log(i);
// }

// count(10, 0, 1);

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//       total *= argument;
//     }
//     return total;
//   }

//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведения операции введите сумму больше нуля");
//     } else if (amount > balance) {
//       console.log("Недостаточно средств на счету");
//     } else {
//       console.log("Операция снятия средств проведена успешно");
//     }
//   }

//   withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//   withdraw(500, 300); // "Недостаточно средств на счету"
//   withdraw(100, 300); // "Операция снятия средств проведена успешно"

//   function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведения операции введите сумму больше нуля");
//       return;
//     }

//     if (amount > balance) {
//       console.log("Недостаточно средств на счету");
//       return;
//     }

//     console.log("Операция снятия средств проведена");
//   }

//   withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//   withdraw(500, 300); // "Недостаточно средств на счету"
//   withdraw(100, 300); // "Операция снятия средств проведена"

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

// // "Лог перед вызовом fnA"
// // "Лог внуртри функции fnA до вызова fnB"
// // "Лог внутри функции fnB"
// // "Лог внуртри функции fnA после вызова fnB"
// // "Лог после вызова fnA"

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// const friends = ["friend-1", "friend-2", "friend-3"];
// console.table(friends);
// console.table(friends[0]);

// friends[2] = "qeqeqe"
// friends[1] = 444
//  console.log(friends)

// let a = 10;
// let b = 30;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a)
// console.log(b)

// const a = [1, 2, 3, 4, 5];
// const b = a;

// console.log(a);
// console.log(b);

// a[0] = 100;

// console.log(a);
// console.log(b);

// console.log(a === b);

// const friends = ["friend", "friend", "friend", "friend", "friend"];
// // console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//   friends[i] += `-${i}`;
// }

// console.table(friends);

// const cart = [32, 23, 50, 54, 75, 23];

// let total = 0;

// // for (let i = 0; i < cart.length; i += 1) {
// //   console.table(cart[i]);
// //   total += cart[i];
// // }

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);

// const numbers = [32, 23, 50, 54, 75, 23, 10];
// let total = 0;
// let totalNo = 0;
// numbers[0] = 42;
// numbers[1] = 24;

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log("Четное число");
//     total += number;
//   } else if (number % 2 !== 0) {
//     console.log("Не четное число");
//     totalNo += number;
//   }
// }

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log("Четное число");
//     total += number;
//   } else if (number % 2 !== 0) {
//     console.log("Не четное число");
//     totalNo += number;
//   }
// }
// console.log("Total - четные", total);
// console.log("Total - не четные", totalNo);

// for (const value of cart) {
//     console.log(value[i])
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     // console.log("Пропустить", number);
//     continue;
//   }
//   console.log(`${number} - Четное`);
//   total += number;
// }

const logins = ["enfewrfew", "enwfiewrn", "23412fdvsdfv", "23412f"];
const loginToFind = "23412f";
let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log("login:", login);
//   console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }

// }

// for (const login of logins) {
//   console.log("login:", login);
//   console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// console.log(message);

// if (logins.includes(loginToFind)) {
//   message = `Пользователь ${loginToFind} найден`;
// }

// console.log(message);

// const result = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`

// console.log(result)

// const result = logins.includes(loginToFind)

// console.log(result)

// const numbers = [21, 9, 24, 5, 57, 2, 5];

// let smallesNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallesNumber) {
//     smallesNumber = number;
//   }
// }
// console.log("Самое маленькое число:", smallesNumber);

// let bigNumber = numbers[0];

// for (const number of numbers) {
//   if (number > bigNumber) {
//     bigNumber = number;
//   }
// }
// console.log("Самое маленькое число:", bigNumber);

// const friends = ["frieds-1", "frieds-2", "frieds-3", "frieds-4", "frieds-5"];
// let string = "";
// // let string = " ";
// // for (const friend of friends) {
// //   string += friend + ",";
// //   string = string.slice(0, string.length - 1);
// // }
// // console.log(string);
// string = friends.join(", ");
// console.log(string);

// const string = "JavaScript";
// const Letters = string.split("");
// let invertedString = "";
// console.log(Letters);

// for (const Letter of Letters) {
//   //   console.log(Letter);

//   //   if (Letter === Letter.toLowerCase()) {
//   //     console.log("Эта буква в нижнем регистре - ", Letter);
//   //     invertedString += Letter.toUpperCase();
//   //   } else {
//   //     console.log("Эта буква в верхнем регистре - ", Letter);
//   //     invertedString += Letter.toLowerCase();
//   //   }
//   invertedString += Letter === Letter.toLowerCase()
//     Letter.toUpperCase()
//     : Letter.toLowerCase();
// }
// console.log("Инверсия -", invertedString);

// const title = "На первый взгляд код следующего примера выглядит хорошо.";

// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8];
// const array3 = [9, 10, 11];
// const array4 = [12, 13, 14];
// let total = 0;

// const numbers = array1.concat(array2, array3, array4);

// for (const number of numbers) {
//   total += number;
// }

// console.table("Total:", total);

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];
// // console.table(cards);
// // const cardToRemove = "Карточка-3";
// // const index = cards.indexOf(cardToRemove);
// // console.log(index);
// // cards.splice(index, 1);
// // console.table(cards);

// // const carToInsert = "Карточка-6";
// // const index = 3;
// // cards.splice(cards.length, 0, 10, 20, 30);

// // console.table(cards);

// const carToUpdate = "Карточка-4";
// // cards.splice(3, 1, 333);
// // console.table(cards);
// const index = cards.indexOf(carToUpdate);
// console.log(index);

// cards.splice(index, 1, "Привет");
// console.table(cards);

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   //   const result = x + y;
//   return x + y;
//   //   console.log("Результа:", result);
//   //   console.log("Выполнение функции");
// };
// const r1 = add(3, 4);
// console.log("r1: ", r1);
// const r2 = add(1, 3);
// console.log("r2: ", r2);
// const r3 = add(6, 44);
// console.log("r3: ", r3);

// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   return "Result"
// };
// console.log(fn());

// const fn1 = function () {
//   console.log("Выполняется футкция fn1");
//   fn2();
// };
// const fn2 = function () {
//   console.log("Выполняется футкция fn2");
//   fn3();
// };
// const fn3 = function () {
//   console.log("Выполняется футкция fn3");
//   console.log(value);
// };
// fn1();
// fn2();
// fn3();

// const fn = function () {
// //   console.table(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const fn = function (...args) {
//   //   console.table(arguments);

//   console.log(args);
// };

// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const fn = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(fn(1, 2, 3, 4, 5, 6, 7));
// console.log(fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// const filteNumbers = function (array, ...args) {
//   //   console.log("array", array);
//   //   console.log("args", args);
//   const newArray = [];
//   for (const element of array)
//     if (args.includes(element)) {
//       newArray.push(element);
//       console.log(`${element} есть совпадение`);
//     }
//   console.table(newArray);
// };

// console.log(filteNumbers([1, 4, 6, 7, 9, 4, 88], 4, 8, 64, 46, 65, 344, 88));
// console.log(filteNumbers([14, 34, 43, 25, 88], 4, 46, 34, 43, 88));

