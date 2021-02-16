var food = [`okra`,`carrot`,`kale`,`spinach`,`onion`,`apples`,`bananas`,`grapes`,`oranges`]
console.log(food)

food.pop();
console.log(food);

food.push(`strawberries`);
console.log(food);

food.shift(`okra`);
console.log(food);

food.unshift(`broccoli`);
console.log(food);

var veggies = food.slice(0,5);
console.log(veggies);

var fruit = food.slice(5,9);
console.log(food)

food.splice(4,1);
console.log(food);

food.splice(2,2,`brussels sprouts`);
console.log(food);

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
console.log(text[5]);

var pos = text.indexOf(".");
console.log(pos);

console.log(text[56]);

var lorem = text.slice(0,5);
console.log(lorem);

var chores1 = "clean, pay bills, groceries";

var chores2 = "learn JS, doctors office, pick up kids ";

var allChores = chores1 + "," + chores2;
console.log(allChores);

var allChores = allChores.split(",");
console.log(allChores)