// Задача 1. Печатное издание
// Базовый класс для всех печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // Начальное состояние
    this.type = null;
  }

  // Геттер для получения состояния
  get state() {
    return this._state;
  }

  // Сеттер для установки состояния с проверками
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  // Метод для улучшения состояния
  fix() {
    this.state = this._state * 1.5;
  }
}

// Класс для журналов
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

// Базовый класс для книг
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

// Класс для романов
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

// Класс для фантастических книг
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

// Класс для детективов
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2. Библиотека
// Класс библиотеки
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Добавление книги в библиотеку
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
      return true;
    }
    return false;
  }

  // Поиск книги по указанному критерию
  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  // Выдача книги читателю
  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((book) => book.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
}

// Задача 3. Журнал успеваемости
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // Объект для хранения оценок по предметам
  }

  // Метод добавления оценки по предмету
  addMark(mark, subject) {
    // Проверка валидности оценки
    if (mark < 2 || mark > 5) {
      return false;
    }

    // Если предмет встречается впервые, создаем для него массив
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    // Добавляем оценку в массив для данного предмета
    this.marks[subject].push(mark);
    return true;
  }

  // Метод получения средней оценки по предмету
  getAverageBySubject(subject) {
    // Если предмет отсутствует, возвращаем 0
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    // Считаем среднюю оценку по предмету
    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  }

  // Метод получения средней оценки по всем предметам
  getAverage() {
    const subjects = Object.keys(this.marks);

    // Если нет предметов, возвращаем 0
    if (subjects.length === 0) {
      return 0;
    }

    // Считаем сумму средних оценок по каждому предмету
    const sumOfAverages = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    // Возвращаем общую среднюю оценку
    return sumOfAverages / subjects.length;
  }
}

// Тестирование
function testStudent() {
  console.log("Начинаем тестирование системы учета успеваемости:");

  const student = new Student("Олег Никифоров");
  console.log(`1. Создан студент: ${student.name}`);

  // Тест добавления оценок
  console.log("\n2. Тестируем добавление оценок:");
  console.log("Добавляем оценки по химии:");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  console.log(student.marks.химия); // [5, 5]

  console.log("\nДобавляем оценки по физике:");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Не должна добавиться
  console.log(student.marks.физика); // [5, 4]

  // Тест получения средней оценки по предмету
  console.log("\n3. Тестируем получение средней оценки по предмету:");
  console.log(
    `Средний балл по физике: ${student.getAverageBySubject("физика")}`
  ); // 4.5
  console.log(
    `Средний балл по биологии: ${student.getAverageBySubject("биология")}`
  ); // 0

  // Тест получения общей средней оценки
  console.log("\n4. Тестируем получение общей средней оценки:");
  console.log(`Общий средний балл: ${student.getAverage()}`); // 4.75
}

// Запуск тестирования
testStudent();
