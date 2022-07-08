/**
 * // reduce, filter, sort
// Получи массив всех умений всех пользователей(поле skills),
//     при этом не должно быть повторяющихся умений и они должны
// быть отсортированы в алфавитном порядке.
 */

// /// Write code under this line
// const getSortedUniqueSkills = (array) =>{}

// Write code under this line
const getSortedUniqueSkills = array => {
  return users
    .flatMap(user => user.skills)
    .filter((skill, idx, skills) => skills.indexOf(skill) === idx)
    .sort();
};

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
