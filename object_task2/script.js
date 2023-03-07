let seller = {
	apples: 10,
	applePrice: 5,
	sellApples(amount) {
		this.apples -= amount;
		this.money += amount * this.applePrice;
	}
};

let buyer = {
	money: 50,
	apples: 0,
	buyApples(amount) {
		let cost = amount * seller.applePrice;
		if (this.money < cost) {
			console.log("Недостаточно денег!");
			return;
		}
		this.money -= cost;
		this.apples += amount;
		seller.sellApples(amount);
		console.log(`Куплено ${amount} яблок за ${cost} грн`);
	}
};

buyer.buyApples(7);
console.log(`Осталось ${seller.apples} яблок у продавца`);
console.log(`Осталось ${buyer.money} грн у покупателя`);