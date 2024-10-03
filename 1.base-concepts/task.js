function solveEquation(a, b, c) {
  let roots = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка и преобразование входных данных
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  // Преобразуем процентную ставку к месячной ставке
  let monthlyPercent = percent / 100 / 12;

  // Рассчитываем тело кредита
  let loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платёж по формуле аннуитетного платежа
  let monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Общая сумму выплат
  let totalPayment = monthlyPayment * countMonths;

  // Округляем результат до двух знаков после запятой
  totalPayment = Math.round(totalPayment * 100) / 100;

  return totalPayment;
}

// Примеры результатов
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
