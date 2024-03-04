var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.lenght);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;

alert("Hello, " + capitalisedName);      //çıktısı girilen ismin ilk harfi büyük ,kalanlar küçük





var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21 ;
alert("Your dog is " + humanAge + " years old in human years.");





function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy" + numberOfBottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  } 

getMilk(5);   //çıktısı 5 / 1.5 ten ve Mat.floor ile virgülden sonrası aşağıya yuvarlandığından 3 şişe süt alır.





function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months +  " months left. ");
}

lifeInWeeks(29);  // çıktısı You have 22265 days, 3172 weeks, and 732 months left. 





function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy" + numberOfBottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

     return money % 1.5; 
  } 

var change = getMilk(4);
console.log(change);  // çıktısı komutlar , buys 2 bottles of milk and 1 change.





function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + calcBottles(money, 1.5) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

     return money % 1.5; 
  } 

  function calcBottles(startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }

  getMilk(5);  // çıktısı komutlar, buys 3 bottles of mil and 0.5 change.





  function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + calcBottles(money, 1.5) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

     return calcChange(money, 1.5); 
  } 

  function calcBottles(startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }

  function calcChange(startingAmount, costPerBottle) {
      var change = startingAmount % costPerBottle;
      return change;
  }

  console.log("Hello master, here is your " + getMilk(5) + " change.");  // çıktısı komutlar, buy 3 bottles of milk, Hello master, here is your 0.5 change.





  function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + calcBottles(money, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

     return calcChange(money, costPerBottle); 
  } 

  function calcChange(startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }

  function calcChange(startingAmount, costPerBottle) {
      var change = startingAmount % costPerBottle;
      return change;
  }

  console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");  //  çıktısı komutlar, buy 3 bottles of milk, Hello master, here is your 0.5 change.





  function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + calcBottles(money, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

     return calcChange(money, costPerBottle); 
  } 

  function calcChange(startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }

  function calcChange(startingAmount, costPerBottle) {
      var change = startingAmount % costPerBottle;
      return change;
  }

  console.log("Hello master, here is your " + getMilk(10, 3) + " change.");   //  çıktısı komutlar, buy 3 bottles of milk, Hello master, here is your 1 change.





  function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);  //  weight / (height * height)
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);   // çıktısı 20.061728395061728





function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);  //  weight / (height * height)
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);  // çıktısı 20