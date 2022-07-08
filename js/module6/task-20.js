import { users } from '../../users.js';

//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
// Пиши код выше этой строки

console.log(getInactiveUsers(users));
//массив объектов пользователей с именами Moore Hensley, Ross Vazquez и Blackburn Dotson
