// Задача 4-2
// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr.
// Функция возвращает true или false в зависимости от того встречается
// ли элемент первый раз в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.Функция
// возвращает true или false в зависимости от того является ли
// элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром
// array - массив чисел, а вторым параметром cb - функцию обратного
// вызова(callback).Дополни тело функции так, чтобы функция filterArray
// заполняла новый пустой массив numbers только теми элементами из
// массива array, для которых вызов функции cb вернет true.

function isUniq(element, index, arr) {
  return arr.indexOf(element) === index;
}

function isEven(element) {
  return element % 2 === 0;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

function filterArray(array, cb) {
  let numbers = [];
  for (let i = 0; i <= array.length; i += 1) {
    if (cb(array[i], i, array)) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
