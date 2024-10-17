// Задача 1.
function getArrayParams(...arr) {
  if (arr.length === 0)
    return {
      min: 0,
      max: 0,
      avg: 0,
    };

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
    sum += num;
  }

  let avg = (sum / arr.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: parseFloat(avg),
  };
}

// Задача 2.

// 1. Насадка для суммы элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

// 2. Насадка для разницы между максимальным и минимальным значениями
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

// 3. Насадка для разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

// 4. Насадка для среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

// Задача 3.

// Агрегирующая функция makeWork
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
