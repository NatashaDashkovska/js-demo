// Напиши функцию countTotalSalary(salaries)
// которая принимает объект зарплат, где имя
// свойства это имя сотрудника, а значение свойства
// это зарплата. Функция должна рассчитать общую
// сумму зарплат сотрудников и вернуть её. Используй
// переменную totalSalary для хранения общей суммы
// зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   // Change code above this line
//   return totalSalary;
// }

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const numbers = Object.values(salaries);
  for (let number of numbers) {
    totalSalary += number;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// 330

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// 400
