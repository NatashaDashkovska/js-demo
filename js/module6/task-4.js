/**
 * Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
 */

// // Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

console.log(calculateTotalPrice(8, 60));
//480
console.log(calculateTotalPrice(3, 400));
//1200
