// Задача 4-1
// Callback функция
// Функция mapArray(array, cb), принимает 1 - м параметром array
//     - массив чисел, а вторым параметром cb - функцию обратного
// вызова(callback).Функция mapArray создает новый массив numbers
// и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array()
// и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex, которая принимает два
// параметра - element и index и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex, которая принимает два
// параметра - element и index и возвращает число - разность element и index(вычитание).

// // Write code under this line
// const addIndex

// // Write code under this line
// const subIndex

// function mapArray

// //Массив 'numbers' должен создаваться с помощью функции-конструктора Array с аргументом - длиной массива 'array'
// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

//Write code under this line
const addIndex = function (elem, index) {
  return elem + index;
};

// Write code under this line
const subIndex = function (elem, index) {
  return elem - index;
};

function mapArray(array, cb) {
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = cb(array[i], i);
  }
  return numbers;
}

//Массив 'numbers' должен создаваться с помощью функции-конструктора Array с аргументом - длиной массива 'array'
const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
