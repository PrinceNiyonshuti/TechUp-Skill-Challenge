/** @format */

const item = [
	{ name: "Bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "Album", price: 10 },
	{ name: "Book", price: 5 },
	{ name: "Phone", price: 500 },
	{ name: "Computer", price: 1000 },
];

// Question 1
const cheapestItem = item.reduce((first, second) =>
	first.price < second.price ? first : second
);
console.log(
	"Q1. Without money, I will Buy a " +
		cheapestItem.name +
		" with price of " +
		cheapestItem.price
);

// Question 2
const expensiveItem = item.reduce((first, second) =>
	first.price > second.price ? first : second
);
console.log(
	"Q2. The expensive product is " +
		expensiveItem.name +
		" with price of " +
		expensiveItem.price
);

// Question 3
let total = 0;
item.forEach((values) => {
	total += values.price;
});
console.log("Q3. The total price of all products is " + total);

// Question 4
let total2 = 0;
item.forEach((values) => {
	if (values.price >= 10) {
		total2 += values.price;
	}
});
console.log("Q4. The total without whose price is < 10 is " + total2);
