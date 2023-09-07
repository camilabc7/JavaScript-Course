//De Array a Objetos en Javascript
let pelisQueue = [
  "Morbius",
  "La invitación",
  "Halloween: el final",
  "Muerte en el Nilo",
  "Black Adam",
];
let pelisQueueObj = {};

pelisQueueObj["estrenar"] = pelisQueue[0];

for (let i = 1; i < pelisQueue.length; i++) {
  pelisQueueObj[i] = pelisQueue[i];
}

// console.log(pelisQueueObj);

const hola = "asdbf3asdbfvalor00000";
const holaSplit = hola.split("asdbf");
//console.log(holaSplit);
holaSplit.shift();
//console.log(holaSplit);
result = holaSplit[1].substring(0, 5);
const object = {};

object[holaSplit[0]] = result;

//console.log(object);

fetch("https://api.chucknorris.io/jokes/random?category=dev").then((res) =>
  res.json()
); // the .json() method parses the JSON response into a JS object literal
//.then((data) => console.log(data));

const newJoke = {
  categories: ["dev"],
  value:
    "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command.",
};

//console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}
//console.log(typeof JSON.stringify(newJoke)); // string

/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
isValid = function (s) {
  let resp;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === "(" && s[j] === ")") {
        resp = true;
      } else if (s[i] === "[" && s[j] === "]") {
        resp = true;
      } else if (s[i] === "{" && s[j] === "}") {
        resp = true;
      } else {
        resp = false;
      }
    }
  }
  return resp;
};

/** Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0];
  var max;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
      for (var j = i; j < prices.length; j++) {
        if (prices[j] > max) {
          max = prices[j];
        }
      }
    }
  }
  return max - min;
};


/** Encontrar el numero menor en un arreglo
 * @param {number[]} prices
 * @return {number}
 */
var numeros = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100 ];
var min = numeros[0];
for (var i = 0; i < numeros.length ; i++) {
    if (numeros[i] < min) {
        console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + numeros[i]);
        min = numeros[i];
    }
}
console.log(`Valor mínimo: ${min}` );

//String cada posicion separado por caracteres y lo que estaba dentro era un id, un tipo y numeros en 0,
//Se debe poner todo en un objeto, primero numero como id, segundo valor, y el resto se puede ignorar
let str="aaa1aaavalor000";
let res=str.split("aaa");
res.shift();
value=res[1].substring(0,5);
let obj = {};
obj[res[0]]=value;

console.log(obj);



//Implementar JSON Stringfy.
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));

//JSON PARSE Convierte un JSON a un Objeto en JavaScript
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let userObj = JSON.parse(userStr);
console.log(userObj)

let userObj1 = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});
console.log(userObj1);

/**Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xS = x.toString();
  let left = 0;
  let right = xS.length - 1;
  while (left < right) {
    if (xS.charAt(left) !== xS.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};


//SET EXPLANAITON: The Set object automatically removes any duplicate values that are added to it. So, if the size of the set is equal to the length of the nums array, it means that all of the elements in the nums array are unique.
/** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set(nums)
  if(set.size == nums.length){
      return false
  }  
  return true
};



// Given a list of items, implement a function that returns items by category, sorted by price in ascending order.

const categories = [
  { id: "GAME_CONSOLE", name: "Game console" },
  { id: "OFFICE_EQUIPMENT", name: "Office equipment" },
  { id: "ELECTRONICS", name: "Electronics" },
  { id: "COLLECTIBLES", name: "Collectibles" },
  { id: "CERAMICS", name: "Ceramics" },
  { id: "CLOTHING", name: "Clothing" },
  { id: "OTHERS", name: "Others" },
]

const items = [
  { name: "PS5", category: { id: "GAME_CONSOLE", name: "Game console" }, price: 550.00 },
  { name: "Dell monitor", category: { id: "OFFICE_EQUIPMENT", name: "Office equipment" }, price: 1100.00 },
  { name: "iPad", category: { id: "ELECTRONICS", name: "Electronics" }, price: 800.00 },
  { name: "Spider man Funko pop", category: { id: "COLLECTIBLES", name: "Collectibles" }, price: 24.50 },
  { name: "PS4", category: { id: "GAME_CONSOLE", name: "Game console" }, price: 350.00 },
  { name: "Macbook Pro", category: { id: "ELECTRONICS", name: "Electronics" }, price: 1900.00 },
  { name: "Coffe mug", category: { id: "CERAMICS", name: "Ceramics" }, price: 12.00 },
  { name: "Nike shoes", category: { id: "CLOTHING", name: "Clothing" }, price: 120.00 },
  { name: "Tickets to Nowhere", category: { id: "OTHERS", name: "Others" }, price: 300.00 },
  { name: "PS5 (Refurbished)", category: { id: "GAME_CONSOLE", name: "Game console" }, price: 500.00 },
  { name: "Ergonomic mouse", category: { id: "OFFICE_EQUIPMENT", name: "Office equipment" }, price: 44.00 },
  { name: "Nintendo Switch", category: { id: "GAME_CONSOLE", name: "Game console" }, price: 400.00 },
  { name: "Macbook Air", category: { id: "ELECTRONICS", name: "Electronics" }, price: 1200.00 },
  { name: "Samsung Galaxy", category: { id: "ELECTRONICS", name: "Electronics" }, price: 1000.00 },
  { name: "Hulk Funko pop", category: { id: "COLLECTIBLES", name: "Collectibles" }, price: 23.00 },
  { name: "KAWS toy", category: { id: "COLLECTIBLES", name: "Collectibles" }, price: 438.00 },
  { name: "PS4 Pro", category: { id: "GAME_CONSOLE", name: "Game console" }, price: 400.00 },
  { name: "IKEA Dish", category: { id: "CERAMICS", name: "Ceramics" }, price: 8.00 },
]

const a = require('lodash');

function itemsByCategory(categoryName) {
  return items.filter((product)=>  product.category.name===categoryName);
}

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your category\n", function (string) {
  userInput = string;

  const filteredItems = itemsByCategory(userInput);
  filteredItems.sort((itemA,itemB) => itemA.price - itemB.price);
  console.log("Your items are " + filteredItems.map(item => item.name));

  // close input stream
  rl.close();
});



