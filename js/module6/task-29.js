/**
 * Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех
 *  средств (свойство balance) которые хранят пользователи из массива users.
 */

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((prevValue, user) => {
    return prevValue + user.balance;
  }, 0);
};
// Пиши код выше этой строки

console.log(calculateTotalBalance(users));
//20916
