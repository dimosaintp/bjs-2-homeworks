// Задача 1. Сравнить массивы.

/**
 * Проверяем длины массивов - если они разные, то сразу возвращаем false.
 * Используем метод every, который сравнивает каждый элемент первого массива с элементом второго массива на том же индексе.
 * Если хотя бы одна пара элементов не совпадает, every вернёт false.
 */

function compareArrays(arr1, arr2) {
  // Сначала проверяем длины массивов
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Используем every для сравнения элементов
  return arr1.every((element, index) => element === arr2[index]);
}

// Пример вызова:
console.log(compareArrays([8, 9], [6])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

// Задача 2. Фильтрация и преобразование массива.

/**
 * Проверяем, не пустой ли входной массив.
 * Фильтруем пользователей по указанному полу.
 * Проверяем, есть ли пользователи заданного пола.
 * Используем метод reduce для подсчёта суммы возрастов и делим на количество пользователей.
 * Возвращаем среднее значение.
 */

function getUsersNamesInAgeRange(users, gender) {
  // Проверяем, не пустой ли массив
  if (!users.length) {
    return 0;
  }

  // Фильтруем пользователей по полу
  const filterUsers = users.filter((user) => user.gender === gender);

  // Если нет пользователей заданного пола, возвращаем 0
  if (!filterUsers.length) {
    return 0;
  }

  // Считаем среднее значение возраста
  const averageAge =
    filterUsers.reduce((sum, user) => sum + user.age, 0) / filterUsers.length;

  return averageAge;
}

// Пример вызова:

const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];

// Тесты:

console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
