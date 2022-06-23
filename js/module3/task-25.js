// Дополни метод removePotion(potionName) так,
// чтобы он удалял зелье potionName из массива
// зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);
    // Change code above this line
  },
};

atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.potions);
