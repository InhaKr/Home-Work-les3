"use strict";
// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
//   а.проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//   в.найти максимальное число и минимальное число.
// debugger

let a = [];
let B = [];
a.length = 5;
let max = 0;
let min = 20;


for (let i = 0; i < a.length; i++) {
  a[i] = Math.floor(Math.random() * 20);
  let c = 0;

    if(a[i] > max) {
      max = a[i];
    }
    if(a[i] < min) {
      min = a[i];
    }

  for (let k = 0; k <= a[i]; k++) {

    if (a[i] % k == 0) {
      c = c + 1;
    }
  }

  if (c <= 2 && a[i] != 0 && a[i] != 1) {
    console.log(a[i]);
    B[i] = a[i];
  }
}

console.log(a);
console.log(max);
console.log(min);
console.log(B);



// // debugger
let a = [];
let B = [];
a.length = 5;
let w = 0;

for (let i = 0; i < a.length; i++) {
  a[i] = Math.floor(Math.random() * 20);
}
console.log(a);

let max = a[0];
let min = a[0];

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }

  if (a[i] < min) {
    min = a[i];
  }
}
console.log(max);
console.log(min);

for (let i = 0; i < a.length; i++) {
    let c = 0;

  for (let k = 0; k <= a[i]; k++) {

    if (a[i] % k == 0) {
      c = c + 1;
    }
  }

  if (c <= 2 && a[i] != 0 && a[i] != 1) {
    console.log(a[i]);
    B[w] = a[i];
    w++;
  }
}

console.log(B);




// 2.Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны 
// получить 4, 2, 6, 5, 1.Нельзя использовать стандартный метод reverse(). 
// Постарайтесь не использовать дополнительный массив.
// Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).
// debugger

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);


for (let i = 0; i < a.length / 2; i++) {
  // console.log(a[i]);
  let c =  a[i];
  a[i] =a[a.length - i - 1];
  a[a.length - i - 1] = c;
};
console.log(a);




// 3.Создать массивы А и В. Заполнить случайными числами.
//  Найди все элементы которые повторяются в массивах А и B
let A = [];
A.length = 10;

let B = [];
B.length = 10;

for (let i = 0; i < A.length; i++) {
  A[i] = '' + Math.floor(Math.random() * 50);
};
console.log(A);

for (let i = 0; i < B.length; i++) {
  B[i] = '' + Math.floor(Math.random() * 50);
};
console.log(B);

A.sort();
B.sort();
let i = A.length;
let j = B.length;
let same = [];

while (i > 0 && j > 0) {
  i--;
  j--;


  if (A[i] > B[j]) {
    j++;
  } else if (A[i] < B[j]) {
    i++;
  } else {
    same.push(A[i]);
  }
}
console.log(same);


// 4.В одномерном массиве произвести такую замену: 1 элемент поменять с 2,
// 3 элемент поменять с 4, 5 элемент поменять с 6 и тд. 
// Если длинна массива непарная - последний элемент не трогать.
// Например: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5
// debugger
let a = [50, 40, 20, 10,80,100,5];
console.log(a);


for (let i = 0; i < a.length -1; i += 2) {

  let c = a[i];
  a[i] = a[i + 1];
  a[i + 1] = c;
}
console.log(a);