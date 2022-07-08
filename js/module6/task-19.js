import { users } from '../../users.js';
//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив
//активных пользователей, значение свойства isActive которых true.

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getActiveUsers = users => {
  return users.filter(user => user.isActive);
};
// Пиши код выше этой строки

console.log(getActiveUsers(users));
///массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony
