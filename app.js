//---------Chapter1-------

// 1. Write a script to greet your website visitor using JS alert
// box

//alert ('Hi Dear User, Thank you for visiting my website');

// 2. Write a script to display following message on your web
// page:

//alert("Error!! Please Enter a Valid Password");

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

// var msg1 = 'Welcome to JS Land';
// var msg2 = 'Happy Coding';

// var fullMsg = msg1 + '\r\n' + msg2;

// alert (fullMsg);

// 4. Write a script to display following messages in sequence:

// var msg1 = 'Welcome to JS Land';
// var msg2 = 'Happy Coding';

// alert (msg1);
// alert (msg2);

// 5. Generate the following message through browser’s
// developer console:

//console.log("Hello, I can run JS through my web browser's console");

//6.Make use of alerts in your new/existing HTML & CSS project.

//---------Chapter2-------

// 1. Declare a variable called username.

//var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// var myName = 'Muhammad Annas Zulfiqar';

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var msg = 'Hello World';
// alert (msg);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// var name = 'Name: Muhammad Annas Zulfiqar';
// var fname = 'Father Name: Zulfiqar';
// var Rollnumber = 'Roll#: WM7343';

// var bioData = name + '\r\n' + fname + '\r\n' + Rollnumber;
// alert (bioData);

// var name1 = 'Annas \nAnna \nAnn \nAn \nA';
// alert (name1);

// var email = 'm.annaszulfiqar@Gmail.com';
// alert ('My email address is ...' + email);

// var book = 'A smarter way to Learn Javascript';
// alert ('I am trying to learn from the book ' + book);

// document.write ('YEAH!!!! I can write Html Content through Javascript');

// var symbol = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

// alert (symbol);

//chapter 03 task

// var age = 22;
// alert ('I am ' + age + ' years old ');

// var visit = 23;
// alert ('You have visited this site ' + visit + ' times');

// var birthyear = 1996;
// document.write ('My birth year is ' + birthyear);
// document.write ('<br>');
// document.write ('\n Data type of my declared variable is' + typeof birthyear);

// var visitor_name = 'Furqan';
// var product_title = 'Trousers';
// var Quantity = 25;
// document.write (
//   visitor_name +
//     ' Ordered ' +
//     Quantity +
//     product_title +
//     ' on XYZ clothing Store '
// );

//chap 04 task

// 3 variables in one statement.

// var First_name, middle_name, Last_name;

// //5 legal variable names.

// var name;

// var First_name;

// var $my_1stVariable;

// var lastName;

// var price1;

//5 illegal variable names

// var first name;

// var 1age;

// var #name;

// var while;

// var 1stcustomer;

// document.write ('<h1>' + 'Rules for naming JS variables' + '</h1>');

// document.write (
//   'Variable names can only contain alphabet and numbers(!After any alphabet), $ and _. For example: $my_1stVariable.' +
//     '<br/>'
// );

// document.write (
//   'Variable must begin with a letter, $ or _. For example: $name, _name or name' +
//     '<br/>'
// );

// document.write (' Variable names are case sensitive' + '<br/>');

// document.write (
//   'Variable names should not be JS keywords like if while or do' + '<br/>'
// );
//---------Chapter5-------
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var number1 = parseInt (prompt ('Enter First Number'));
// var number2 = parseInt (prompt ('Enter Second Number'));

// var add = number1 + number2;

// document.write ('Sum of ' + number1 + ' and ' + number2 + ' is ' + add);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

/* var number1 = parseInt (prompt ('Enter First Number'));
var number2 = parseInt (prompt ('Enter Second Number'));

var sub = number1 - number2;
var mul = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;

document.write (
  'Subtraction of ' + number1 + ' and ' + number2 + ' is ' + sub + '<br>'
);
document.write (
  'Multiplication of ' + number1 + ' and ' + number2 + ' is ' + mul + '<br>'
);
document.write (
  'Division of ' + number1 + ' and ' + number2 + ' is ' + division + '<br>'
);
document.write (
  'Modulus of ' + number1 + ' and ' + number2 + ' is ' + modulus + '<br>'
);
 */

/* 
3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Valueafter addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”. */

/* var myNum;
document.write ('Value after variable declaration is: ' + myNum + '<br>');

myNum = 5;
document.write ('Initital Value ' + myNum + '<br>');

myNum++;
document.write ('Value after Increment ' + myNum + '<br>');

myNum = myNum + 7;
document.write ('Value after Addition ' + myNum + '<br>');

myNum--;
document.write ('Value after Decrememnt' + myNum + '<br>');

myNum = myNum % 3;
document.write ('The Remainder is ' + myNum + '<br>'); */

/* 4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:
 */

/* var ticketPrice = 600;
var cost = ticketPrice * 5;

document.write ('The cost of buying 5 Ticket is ' + cost);
 */

/* 5. Write a script to display multiplication table of any
number in your browser. E.g */

/* var table = 5;
var lengthOfTable = 10;

for (var i = 1; i <= lengthOfTable; i++) {
  document.write ('5 ' + ' x ' + i + ' = ' + table * i + '<br>');
} */

/* 6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.
Conversion Formulae:
 */

/* var Calcius = 30;
var Fahrenheit = 70;
var CtoF = (Fahrenheit - 32) * 5 / 9;
var FtoC = Calcius * 9 / 5 + 32;

document.write (
  Calcius + '<sup>0</sup>C ' + 'is ' + CtoF + '<sup>0</sup>F' + '<br>'
);

document.write (
  Fahrenheit + '<sup>0</sup>F ' + 'is ' + FtoC + '<sup>0</sup>C' + '<br>'
);
 */

/* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
MATH EXPRESSIONS | JAVASCRIPT
Page 5 of 9
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser. */

/* var priceOfItem1 = 650;
var orderedQuantityOfItem1 = 3;

var priceOfItem2 = 100;
var orderedQuantityOfItem2 = 7;

var shippingCharges = 100;

var totalCost =
  priceOfItem1 * orderedQuantityOfItem1 +
  priceOfItem2 * orderedQuantityOfItem2 +
  shippingCharges;

document.write ('<h1>Shopping Cart</h2> <br>');

document.write ('Price of Item 1 is ' + priceOfItem1 + '<br>');
document.write (
  'Ordered Quantity of Item 1 is ' + orderedQuantityOfItem1 + '<br>'
);
document.write ('Price of Item 2 is ' + priceOfItem2 + '<br>');
document.write (
  'Ordered Quantity of Item 2 is ' + orderedQuantityOfItem2 + '<br>'
);

document.write ('Shipping Charges ' + shippingCharges + '<br>');

document.write ('The Total cose of your order is ' + totalCost); */

/* 8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */

/* var totalMarks = 980;
var marksObtained = 804;

var per = marksObtained / totalMarks * 100;

document.write ('Total Marks is ' + totalMarks + '<br>');
document.write ('Marks Obtained is ' + marksObtained + '<br>');
document.write ('percentage is ' + per + '<br>');
 */

/* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee) */

/* var oneUsDollar = 104.80;
var oneSaudiRiyal = 28;

var conversion = 10 * oneUsDollar + 25 * oneSaudiRiyal;

document.write ('Total Currency in PKR is ' + conversion); */

/* 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */

/* var myNum = 5;

myNum = myNum + 5 * 10 / 2;

alert (myNum);
 */

/* 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”.
 */

/* var currentYear = 2020;
var birthYear = 1998;

age = currentYear - birthYear;
document.write ('Age is ' + age);
 */

/* 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */

/* var Radius = 20;

var circumference = 2 * 3.142 * Radius;
var Area = 3.142 * (Radius * Radius);

document.write ('Radius' + Radius);
document.write ('Circumference' + circumference);
document.write ('Area' + Area);
 */

/* 13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN” */

/* document.write ('<h1>The Life Time Supply Calculator</h2>');

var favoriteSnack = 'Lays';
var age = 22;
var maxAge = 60;
var estimatedAmountPerDay = 3;
var daysInAYear = 365;

var myRemainingLife = maxAge - age;
var SupplyPerYear = estimatedAmountPerDay * daysInAYear;
var totalPacks = SupplyPerYear * myRemainingLife;

alert (totalPacks); */

//---------Chapter6-9 -------

/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */

/* var a = 10;

document.write ('Value of a is ' + a + '<br>');
document.write ('---------------- <br>');

document.write ('Value of ++a is ' + ++a + '<br>');
document.write ('Now Value of a is ' + a + '<br> <br>');

document.write ('Value of ++a is ' + a++ + '<br>');
document.write ('Now Value of a is ' + a + '<br> <br>');

document.write ('Value of ++a is ' + --a + '<br>');
document.write ('Now Value of a is ' + a + '<br> <br>');

document.write ('Value of ++a is ' + a-- + '<br>');
document.write ('Now Value of a is ' + a + '<br> <br>');

 */

/* 2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

/* var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//1 - //0 + //1  + //1
//3

alert (result); */

// a= 1
// b = 0

/* 3. Write a program that takes input a name from user &
greet the user. */

/* var name = prompt ('Can you please tell me your Name?');
alert ('Hi ' + name);
 */

/* Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default. */

/* var number = prompt ('Enter a Number to Generate Table');
console.log (number);

var lengthOfTable = 10;
if (number === null || number == '' || number == ' ') {
  for (var i = 1; i <= lengthOfTable; i++) {
    document.write (5 + ' x ' + i + ' = ' + 5 * i + '<br>');
  }
} else {
  for (var i = 1; i <= lengthOfTable; i++) {
    document.write (number + ' x ' + i + ' = ' + number * i + '<br>');
  }
}
 */

/* 6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
ALERTS | JAVASCRIPT
Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table) */

/* var Sub1 = prompt ('Enter Subject 1');
var Sub2 = prompt ('Enter Subject 2');
var Sub3 = prompt ('Enter Subject 1');

var Marks1 = parseInt (prompt ('Enter Marks 1 out of 100 '));
var Marks2 = parseInt (prompt ('Enter Marks 2 out of 100 '));
var Marks3 = parseInt (prompt ('Enter Marks 3 out of 100 '));

var per1 = Marks1 / 100 * 100;
var per2 = Marks2 / 100 * 100;
var per3 = Marks3 / 100 * 100;

var totalMarks = 300;
var marksObtained = Marks1 + Marks2 + Marks3;

var per = marksObtained / totalMarks * 100;

document.write (
  '<table><tr> <th> ' +
    'Subject' +
    '</th> <th> Total Marks </th>  <th> Obtained Marks </th> <th> Percentage </th> </tr>' +
    '<tr> <td> ' +
    Sub1 +
    '</td> <td> 100 </td> <td> ' +
    Marks1 +
    '</td> <td>' +
    per1 +
    '%</td> </tr> ' +
    '<tr> <td> ' +
    Sub2 +
    '</td> <td> 100 </td> <td> ' +
    Marks2 +
    '</td> <td>' +
    per2 +
    '%</td> </tr>' +
    '<tr> <td> ' +
    Sub3 +
    '</td> <td> 100 </td> <td> ' +
    Marks3 +
    '</td> <td>' +
    per3 +
    '%</td> </tr> ' +
    '<tr> <th> </th> <th>' +
    totalMarks +
    '</th> <th>' +
    marksObtained +
    '</th> <th>' +
    per +
    '</th></tr></table'
);
 */

//---------Chapter6-9 -------
