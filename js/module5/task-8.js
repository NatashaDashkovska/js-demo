/*
Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект. */

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// { brand: 'Audi', model: 'Q3', price: 36000 }
