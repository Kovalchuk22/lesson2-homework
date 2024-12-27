// const x = 10;
// const y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// console.log(x > y);
// console.log(x > y);

// let value = 10;
// console.log(value);

// value += 5; 
// console.log(value);

// value++;
// console.log(value);

// console.log('x > y:', x > y);
// console.log('x < y:', x < y);
// console.log('x >= y:', x >= y);
// console.log('x <= y:', x <= y);
// console.log('x == y:', x == y);
// console.log('x === y:', x === y);
// console.log('x != y:', x != y);
// console.log('x !== y:', x !== y);

// console.log('5 !== 6:', 5 !== '6');
// console.log('5 === 5:', 5 === '5');
// console.log('7 === 7:', 7 === '7');
// console.log('7 == 7:', 7 == '7');
// console.log('true === true:', true == true);

// const value = '23';
// console.log(typeof(value), ':', value);
// console.log(typeof Number(value),':',Number(value));


// const valueT = 'Taras';
// console.log(typeof(valueT), ':', valueT);
// console.log(typeof Number(valueT),':',Number(valueT));

// console.log(Number.parseInt('22Taras')) // ціле
// console.log(Number.parseFloat('4.7Taras22.3')) // дробове

// document.getElementById('calc').addEventListener('click', function(){
//     const num1 = document.getElementsById('num1').value;
//     const num2 = document.getElementsById('num2').value;
//     const p = document.getElementsById('result');

//     const result = Number(num1) + Number(num2);
//     p.texContext = result;
// })


// let askg = prompt("Введи якесь число");
// let askg2 = prompt("Введи ще одне число");

// let num1 = parseFloat(askg);
// let num2 = parseFloat(askg2);

// alert(num1 + num2)

// const validNumber = Number('51');
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number('ewgfdsd'); 
// console.log(Number.isNaN(invalidNumber)); //Not a number

// console.log(0.1 + 0.2 === 0.3); //0.30000000000000.....04
// const abc = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(abc === 0.3); // true

// //Завкруглення числа
// console.log( Math.floor(2.9) ) // 2
// console.log( Math.ceil(2.1) ) // 3
// console.log( Math.round(5.3) ) // 5
// console.log( Math.round(5.6) ) // 6

// // Більше менше
// console.log( Math.max(15, 10, 20, 17)) // max = 20
// console.log( Math.min(15, 10, 20, 17)) // min = 10

// // Степінь і корінь
// console.log( Math.pow(2, 10)) // число в степінь
// console.log( Math.sqrt(16)) // корінь числа

// //рандомне число
// console.log( Math.random() * (10 - 1) + 1);


// const min = 1;
// const max = 10;
// const random1 = Math.floor(Math.random() * (max - min + 1) + min)
// console.log(random1);


// Завдання 1
let celsius = 20; 
let fahrenheit = Math.round(celsius * 3.08);
console.log('Завдання 1:', celsius + '°C дорівнює:',fahrenheit + '°F');

// Завдання 2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24
let minutesInMonth = hoursInMonth * 60
console.log('Завдання 2:', 'Днів:' + daysInMonth, 'Годин:' + hoursInMonth, 'Хвилин:' + minutesInMonth);

// Завдання 3
let playerHealth = 100; 
let playerEnergy = 75;
let playerHealthAfter = playerHealth - 20; 
let playerEnergyAfter = playerEnergy - 15
console.log('Завдання 3:', 'Рівень здоровя гравця:' + playerHealthAfter,'Рівень енергії гравця:' + playerEnergyAfter);

// Завдання 4
let price = 1000;
let priceInSale = price * 0.9;
console.log('Завдання 4:', 'Ціна зі знижкою:', priceInSale + 'грн');

// Завдання 5
let number = 3.1415;
let numberM = Math.floor(number)
console.log('Завдання 5:', 'Заокруглене число::', numberM)

// Завдання 6
let num1 = "123.451212aayndebeb4.7";
let num2 = parseFloat(num1);
console.log('Завдання 6:', 'Перетворене число:',num2);

// Завдання 7
let num11 = "1232xscs2.1";
let num22 =  parseInt(num11);
console.log('Завдання 7:', 'Перетворене число:',num22);

// Завдання 8
let numk1 = 144;
let numk2 = Math.sqrt(numk1);
console.log('Завдання 8:',numk2);

// Завдання 9

let integerValue = 42; 
let numberAsString = "256"; 
let convertedInteger = parseInt(numberAsString);
console.log('Завдання 9:',convertedInteger);
let convertedString = integerValue.toString();
console.log('Завдання 9:',convertedString);



