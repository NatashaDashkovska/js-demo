import { users } from '../../users.js';

/**
 *Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект
  пользователя, почта которого (свойство email) совпадает со значением параметра email.
 */

//   // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
// Пиши код выше этой строки

console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
//объект пользователя с именем Blackburn Dotson
