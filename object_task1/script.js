const Max_Gold = 100
const Low_Gold = 0

let person1 = {
	name:"Ruslan",
	gold:`${Max_Gold}`
}

let person2 = {
	name:"Sergey",
	gold:`${Low_Gold}`
}

// Передаем золото от первого человека ко второму
function transferGold(fromPerson, toPerson) {
	toPerson.gold = fromPerson.gold,
	fromPerson.gold = `${Low_Gold}`
}

// Проверяем начальное количество золота у каждого человека
console.log(`${person1.name} имеет ${person1.gold} золота`);
console.log(`${person2.name} имеет ${person2.gold} золота`);

// Переводим золото
transferGold(person1, person2)

// Выводим конечное количество золота у каждого человека
console.log(`${person1.name} имеет ${person1.gold} золота`);
console.log(`${person2.name} имеет ${person2.gold} золота`);