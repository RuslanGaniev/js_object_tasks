let person1 = {
	name: "Руслан",
	gold: 10
};

let person2 = {
	name: "Сергей",
	gold: 0
};

function meet(person1, person2) {
	person2.gold += person1.gold;
	person1.gold = 0;
	console.log(person1.name + " теперь не имеет золота");
	console.log(person2.name + " теперь имеет " + person2.gold + " золота");
}

meet(person1, person2);
