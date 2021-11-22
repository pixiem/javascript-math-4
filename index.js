//----------- Problem One Solution----------- //
function seerToMon(seer) {
if (seer >= 0) {
var mathematic = seer * 0.025;
return mathematic;
}
else {
return "Enter A Valid Number";
}
}
var seerConvert = seerToMon(40);
console.log(seerConvert);
//----------- Problem Two Solution----------- //
function totalSales(shirt, pent, shoes) {
if (shirt >= 0 && pent >= 0 && shoes >= 0) {
const shirtPrice = 100;
const pentPrice = 200;
const shoesPrice = 500;
var totalShirtCost = shirt * shirtPrice;
var totalPentPrice = pent * pentPrice;
var toalShoePrice = shoes * shoesPrice;
var totalPrice = totalShirtCost + totalPentPrice + toalShoePrice;
return totalPrice;
}
else {
return "Please Enter A Solid Value";
}
}
var sold = totalSales(2, 2, 2);
console.log(sold);
//----------- Problem Three Solution----------- //
function deliveryCost(amount) {
if (amount >= 0 && typeof (amount) === 'number') {
if (amount >= 0 && amount <= 100) {
var totalPrice = amount * 100;
return totalPrice;
}
else if (amount > 100 && amount <= 200) {
var defaultShirt = 10000;
var overHundred = amount - 100;
var overHundredPrice = overHundred * 80;
var totalPrice = defaultShirt + overHundredPrice;
return totalPrice;
}
else if (amount > 200) {
defaultPrice = 18000;
overTwoHundred = amount - 200;
overTwoHundredPrice = overTwoHundred * 50;
totalPrice = defaultPrice + overTwoHundredPrice;
return totalPrice;
}
}
else {
return "Please Give A number only";
}
}
var quantityToCost = deliveryCost(100);
console.log(quantityToCost)
//----------- Problem Four Solution----------- //
function perfectFriend(friendsNames) {
if (typeof (friendsNames) === 'object') {
for (var i = 0; i < friendsNames.length; i++) {
var name = friendsNames[i];
if (name.length == 5) {
return name;
}
}
}
else {
return "please give here a valid value";
}
}
var goodfriend = perfectFriend(["sabbir", "wasif", "depak", "anik"]);
console.log(goodfriend)