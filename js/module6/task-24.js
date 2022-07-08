/**
 * Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны
 *  (свойство isActive) и возвращала true или false.
 */

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const isEveryUserActive = users => {
  return users.every(user => user.isActive);
};
// Пиши код выше этой строки

console.log(isEveryUserActive(users));
//false
