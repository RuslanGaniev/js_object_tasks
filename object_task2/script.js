let merchant = {
	apples: 10,
	money: 0,
	sellApples(amount) {
		this.apples -= amount;
		this.money += amount * 5;
	}
};

let buyer = {
	money: 50,
	apples: 0,
	buyApples(amount) {
		let cost = amount * 5;
		if (this.money < cost) {
			return console.log("У покупателя недостаточно денег");
		}
		this.money -= cost;
		this.apples += amount;
		merchant.sellApples(amount);
		console.log(`Покупатель купил ${amount} яблок за ${cost} грн`);
	}
};

buyer.buyApples(1);
console.log(`Осталось ${merchant.apples} яблока у торговца`);
console.log(`У покупателя осталось ${buyer.money} грн`);