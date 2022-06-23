// Напиши функцию makeTask(data) которая принимает
// один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект
// задачи, не изменяя напрямую параметр data. В новом
// объекте должно быть свойство completed,
// значение которого хранится в одноимённой
// локальной переменной.

// В параметре data гарантированно будет только
// свойство text, а остальные два, category и
// priority, могут отсутствовать. Тогда, в новом
// объекте задачи, в свойствах category и priority
// должны быть значения по умолчанию, хранящиеся
// в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   // Change code above this line
// }

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const mas = {
    category: data.category || category,
    priority: data.priority || priority,
    text: data.text,
    completed,
  };
  return mas;
  // Change code above this line
}

console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(makeTask({ text: 'Buy bread' }));
// { category: "General", priority: "Normal", text: "Buy bread", completed: false }
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  }),
);
// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
