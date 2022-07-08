/**
 * Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей
 *  отсортированный по возрастанию их баланса (свойство balance).
 */

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return [...users].sort(
    (prevUser, nextUser) => prevUser.balance - nextUser.balance,
  );
};
// Пиши код выше этой строки
