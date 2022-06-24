// Выполни рефакторинг решения задачи «Склад товаров»,
//  заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
//   return message;
// }

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  // Change code above this line
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
