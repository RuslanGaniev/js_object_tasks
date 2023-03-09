const cashier = {
	money: 50,

  // Метод для принятия товара и подсчета суммы покупки
	acceptPayment: function(item, quantity) {
		let price = 0;
			switch(item) {
			case 'яблоки':
				price = 5;
				break;
			case 'груши':
				price = 7.5;
				break;
			case 'хлеб':
				price = 4.3;
				break;
			default:
				console.log('Товар не найден');
			return;
		}

		const total = price * quantity;
		console.log(`Сумма покупки: ${total} грн`);

		// Проверяем, достаточно ли денег у покупателя
		if (total > buyer.money) {
			console.log('У вас недостаточно денег');
			return;
		}

		// Удаляем сумму покупки у покупателя
		buyer.money -= total;

		// Добавляем сумму покупки в кассу
		this.money += total;

		// Вычисляем сдачу и выводим ее в консоль
		const change = buyer.money - total;
		console.log(`Вот ваша сдача: ${change} грн`);

		// Выводим чек
		console.log(`Вот ваш чек: ${total} грн`);
	}
};

const buyer = {
	money: 15,

	// Метод для покупки товара
	buy: function(item, quantity) {
		console.log(`Держите деньги: ${this.money} грн`);
		cashier.acceptPayment(item, quantity);
	}
};

buyer.buy('снюс', 2);
buyer.buy('яблоки', 2);
buyer.buy('хлеб', 1);
buyer.buy(`хлеб`, 3)

