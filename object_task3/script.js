let cashRegister = {
	applePrice: 5,
	pearPrice: 7.50,
	breadPrice: 4.30,
	cashInCashier: 50
};

let cashInBuyer = 15;

function buyProduct(price, label, quantity, cashInBuyer) {
	let totalPrice = price * quantity;

	if (cashInBuyer < totalPrice) {
		console.log(`У вас недостаточно денег для покупки ${label}`);
		return cashInBuyer;
	}

	let change = cashInBuyer - totalPrice;
	cashRegister.cashInCashier += totalPrice;

	console.log(`Держите деньги ${totalPrice}грн`);
	console.log(`Вы выбрали ${quantity} ${label}`);
	console.log(`Вот ваша сдача ${change}грн`);
	console.log(`Вот ваш чек ${totalPrice}грн`);
	console.log(`Остаток в кассе: ${cashRegister.cashInCashier}грн`);

	return change;
}


cashInBuyer = buyProduct(cashRegister.applePrice, 'яблок(а)', 1, cashInBuyer);
cashInBuyer = buyProduct(cashRegister.pearPrice, 'груш(у)', 1, cashInBuyer);
cashInBuyer = buyProduct(cashRegister.breadPrice, 'буханок хлеба', 3, cashInBuyer);



