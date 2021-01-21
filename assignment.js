// https://github.com/inzamam-ul/javaScript


// convert kilometer to meter
function kilometerToMeter(valueInKilometere) {
    if (valueInKilometere < 0 || typeof valueInKilometere == "string") {
        return "Input is not valid!!!!"; // Distance can't be negative
    }
    return valueInKilometere * 1000; //we know 1 Kilometer equals to 1000 meter
}

var result = kilometerToMeter(7);
console.log(result);




// Budget calcultor
function budgetCalcultor(numberOfWatch, numberOfMobile, numberOfLaptop) {
    if (typeof numberOfWatch == "string" || typeof numberOfMobile == "string" || typeof numberOfLaptop == "string") { 

        return "Input is not valid!!!!";
    }
    else if (numberOfWatch <= 0 && numberOfMobile <= 0 && numberOfLaptop <= 0) {
        return "Nothing to buy";
    }
    var priceOfWatch = numberOfWatch * 50;
    var priceOfMobile = numberOfMobile * 100;
    var priceOfLaptop = numberOfLaptop * 500;
    var total = priceOfWatch + priceOfMobile + priceOfLaptop;
    return total;
}

var budget = budgetCalcultor(6, 12, 5);
console.log(budget);






// Hotel cost
function hotelCost(days) {
    var cost = 0;
    if (days <= 0 || days >= 365) {
        return "You are a special customer, You don't have to pay bill!!!!!"; //For Homeless(fun)
    }
    else if (typeof days == "string") {
        return "Input is not valid!!";
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstCost = 10 * 100;
        var remaining = days - 10;
        var secondCost = remaining * 80;
        cost = firstCost + secondCost;
    } 
    else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = days - 20;
        thirdCost = remaining * 50;
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}

var cost = hotelCost(12);
console.log(cost);




//Mega Friend
function megaFriend(friendList) {
    var maxLength = 0;
    var indexOfMax = 0;
    if (Array.isArray(friendList)) { // cheaking if input is an array
        for (var i = 0; i < friendList.length; i++) {
            if (friendList[i].length > maxLength) {
                maxLength = friendList[i].length;
                indexOfMax = i;
            }
        }
    }
    else{
        return "Input is not an array";
    }

    return friendList[indexOfMax];
}

var arr = ["Jahid", "Joshef", "Inzamam", "Sheal pondit"];
var maxName = megaFriend(arr);
console.log(maxName);

