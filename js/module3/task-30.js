// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая
// принимает объект сотрудников и возвращает имя самого
// продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся
// как свойства объекта в формате "имя": "кол-во задач".

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers));
// // 'lux'

function findBestEmployee(object) {
  let employees = Object.entries(object);
  let bestEmployee = employees[0];
  //   console.log(Object.entries(object));
  for (let employee of employees) {
    console.log(employee[1]);
    if (employee[1] > bestEmployee[1]) {
      bestEmployee = employee;
    }
  }
  return bestEmployee[0];
}

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
