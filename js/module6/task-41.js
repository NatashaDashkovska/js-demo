/**
 * Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей
 *  (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
 */

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((prevValue, user) => {
      return prevValue + user.balance;
    }, 0);
};
// Пиши код выше этой строки

console.log(getTotalBalanceByGender(users, 'male'));
//12053
console.log(getTotalBalanceByGender(users, 'female'));
//8863
