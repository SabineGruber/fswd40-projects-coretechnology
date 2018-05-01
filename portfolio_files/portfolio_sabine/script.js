var ProductOne = "trip to Amsterdam";
var ProductTwo = "trip to London";
var PriceOne = 1189;
var PriceTwo = 2360;
var sumOne = (PriceOne + PriceTwo);
document.write("<br>" + "<p>" + "If you want to buy a " + "<b>" + ProductOne + "</b>" + " and a " + "<b>" + ProductTwo + "</b>" + ", it costs:" + "</p>" + "<p>" + sumOne + " EUR." + "</p>");

var discountOne = (sumOne / 10);
var discountSumOne = (sumOne - discountOne);
document.write("<br>" + "<p>" + "If you want to buy a " + "<b>" + ProductOne + "</b>" + " and a " + "<b>" + ProductTwo + "</b>" + " as a GoldenCard holder, you will get a 10% discount:" + "</p>" + "<p>" + discountSumOne + "</p>");

var ProductThree = "trip to Rome";
var ProductFour = "trip to Lisbon";
var PriceThree = 2178;
var PriceFour = 2286;
var sumTwo = (PriceThree + PriceFour);
document.write("<br>" + "<p>" + "If you want to buy a " + "<b>" + ProductThree + "</b>" + " and a " + "<b>" + ProductFour + "</b>" + ", it costs:" + "</p>" + "<p>" + sumTwo + " EUR." + "</p>");

var discountTwo = (sumTwo / 10);
var discountSumTwo = (sumTwo - discountTwo);
document.write("<br>" + "<p>" + "If you want to buy a " + "<b>" + ProductThree + "</b>" + " and a " + "<b>" + ProductFour + "</b>" + " as a GoldenCard holder, you will get a 10% discount:" + "</p>" + "<p>" + discountSumTwo + "</p>");
