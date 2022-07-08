/**
 * Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей
 *  (свойство isActive) и возвращала true или false.
 */

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return users.some(user => user.isActive);
};
// Пиши код выше этой строки

console.log(isAnyUserActive(users));
//true
