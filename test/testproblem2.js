let inventory = require("../inventory")
const findCarById = require('../problem/problem1');

const result = findCarById(inventory, inventory.length -1+1);
console.log(result);
