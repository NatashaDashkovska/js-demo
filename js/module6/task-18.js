import { users } from '../../users.js';
/**
 * Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех
 *  пользователей (свойство friends). У нескольких пользователей могут быть одинаковые
 *  друзья, сделай так чтобы возвращаемый массив не содержал повторений.
 */

// // Пиши код ниже этой строки
// const getFriends = (users) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getFriends = users => {
  return users.flatMap(user => user.friends);
};
// Пиши код выше этой строки

console.log(getFriends(users));
//['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']
