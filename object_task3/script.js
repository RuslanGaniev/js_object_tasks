const products = {
  'яблоко': 5,
  'груша': 7.5,
  'хлеб': 4.3
};

let cashierMoney = 50;
let customerMoney = 15;

// функция для покупки
function buy(product, quantity) {
	const price = products[product] * quantity;// цена товаров
		if (customerMoney < price) {
				console.log('У вас недостаточно денег');
				return;
	}
	cashierMoney += price; // отнимаем деньги у покупателя
	customerMoney -= price;// отнимаем деньги у покупателя
	const change = customerMoney > 0 ? customerMoney : 0;// считаем сдачу
	console.log(`Держите деньги ${price} грн`);
	console.log(`Вот ваша сдача ${change} грн`);
	console.log(`Вот ваш чек ${price} грн`);
}
// пример использования функции buy
buy('яблоко', 1);
buy(`хлеб`,2)
buy(`груша`, 1)