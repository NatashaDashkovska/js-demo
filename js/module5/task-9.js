/**
  * Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и
  *  добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
  */

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
//{ model: 'Murano', price: 31700 }
changeBrand('Honda');
