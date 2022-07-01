/*
Добавь в свойство prototype функции-конструктора Car два метода:

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice. */

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car.prototype.hasOwnProperty('getPrice'));
// true

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.getPrice());
//36000
audi.changePrice(35000);
console.log(audi.getPrice());
//35000
