function years(inventory) {
     let car_years=[];
    //  console.log(inventory)
        for (let i = 0; i < inventory.length; i++) {
            // car_years.push(inventory[i].car_year);
            car_years[i]=inventory[i].car_year

        }
        return car_years;

    
}


module.exports = years;