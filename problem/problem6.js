const inventory = require("../inventory");

function bmwAndaudiCar(inventory) {
    let buyer = []

    for (i = 0; i < inventory.length; i++) {

        if (inventory[i]["car_make"] == "Audi" || inventory[i]["car_make"] == "BMW") {
            buyer[buyer.length] = inventory[i]

        }

    }
    return buyer
}
module.exports = bmwAndaudiCar