// В этом коде мы использовали цикл while для продолжительности работы скрипта
while (true) {
	let a = +prompt('Введите первое число:');
	let b = +prompt('Введите второе число:');
	let operation = prompt('Выберите операцию (+, -, *, /, ^):');

	let result;
	// switch для выбора операции
	switch (operation) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			result = a / b;
			break;
		case '^':
			result = Math.pow(a, b);
			break;
		default:
			alert('Неверная операция');
			continue;
	}
	// Также я использовал continue для перехода к следующей итерации цикла, 
	// если пользователь ввел неверную операцию.


	alert(`Результат: ${result}`);
}


