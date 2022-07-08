/**
 * Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее
 * количество друзей (свойство friends) всех пользователей из массива users.
 */

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((prevValue, user) => {
    return prevValue + user.friends.length;
  }, 0);
};
// Пиши код выше этой строки

console.log(getTotalFriendCount(users));
//14
