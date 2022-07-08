/**
 * Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
 *  отсортированный по их имени (свойство name) в алфавитном порядке.
 */
// // Пиши код ниже этой строки
// const sortByName = users => {

// };
// // Пиши код выше этой строки

// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((prevUser, nextUser) =>
    prevUser.name.localeCompare(nextUser.name),
  );
};

// Пиши код выше этой строки

console.log(sortByName(users));
