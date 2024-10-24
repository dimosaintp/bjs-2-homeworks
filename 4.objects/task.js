/**Функция-конструктор Student
 * Принимает три параметра: name, gender, age.
 * Создаёт объект с соответствующими свойствами.
 * Инициализирует пустой массив marks для хранения оценок.
 */

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // Инициализируем пустой массив для оценок
}

/**Метод установки предмета
 * Добавляется в прототип Student
 * Просто устанавливает свойство subject переданным значением
 */

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

/**Метод добавления оценок.
 * Использует rest-параметр (...marksToAdd) для принятия произвольного количества оценок.
 * Проверяет существование массива marks.
 * Добавляет все переданные оценки в массив используя spread-оператор.
 */

Student.prototype.addMarks = function (...marksToAdd) {
  // Проверяем, не отчислен ли студент
  if (!this.marks) {
    return;
  }

  // Добавляем все переданные оценки в массив
  this.marks.push(...marksToAdd);
};

/**Метод подсчета среднего балла.
 * Проверяет наличие оценок и возвращает 0, если их нет.
 * Использует reduce для подсчёта суммы всех оценок.
 * Возвращает среднее арифметическое.
 */

Student.prototype.getAverage = function () {
  // Проверяем наличие оценок
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  // Считаем среднее арифметическое
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

/**Метод отчисления студента.
 * Удаляет свойства subject и marks, используя оператор delete
 * Добавляет свойство excluded с причиной отчисления
 */

Student.prototype.exclude = function (reason) {
  // Удаляем предмет и оценки
  delete this.subject;
  delete this.marks;

  // Добавляем причину отчисления
  this.excluded = reason;
};
