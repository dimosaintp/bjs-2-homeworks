// Задача 1. Форматтер чисел

function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Тесты

console.log(parseCount("12.34")); // 12.34
console.log(validateCount("12.34")); // 12.34
console.log(validateCount("twelve")); // Error: Невалидное значение

// Задача 2. Треугольник

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

// Тесты

const triangle = getTriangle(3, 4, 5);
console.log(triangle.perimeter); // 12
console.log(triangle.area); // 6

const badTriangle = getTriangle(3, 4, 8);
console.log(badTriangle.perimeter); // "Ошибка! Треугольник не существует"
console.log(badTriangle.area); // "Ошибка! Треугольник не существует"
