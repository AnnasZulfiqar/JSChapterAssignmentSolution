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

var name1 = 'Annas \nAnna \nAnn \nAn \nA';
alert (name1);

var email = 'm.annaszulfiqar@Gmail.com';
alert ('My email address is ...' + email);

var book = 'A smarter way to Learn Javascript';
alert ('I am trying to learn from the book ' + book);

document.write ('YEAH!!!! I can write Html Content through Javascript');

var symbol = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

alert (symbol);

//chapter 03 task

var age = 22;
alert ('I am ' + age + ' years old ');

var visit = 23;
alert ('You have visited this site ' + visit + ' times');

var birthyear = 1996;
document.write ('My birth year is ' + birthyear);
document.write ('<br>');
document.write ('\n Data type of my declared variable is' + typeof birthyear);

var visitor_name = 'Furqan';
var product_title = 'Trousers';
var Quantity = 25;
document.write (
  visitor_name +
    ' Ordered ' +
    Quantity +
    product_title +
    ' on XYZ clothing Store '
);

//chap 04 task

// 3 variables in one statement.

var First_name, middle_name, Last_name;

//5 legal variable names.

var name;

var First_name;

var $my_1stVariable;

var lastName;

var price1;

//5 illegal variable names

// var first name;

// var 1age;

// var #name;

// var while;

// var 1stcustomer;

document.write ('<h1>' + 'Rules for naming JS variables' + '</h1>');

document.write (
  'Variable names can only contain alphabet and numbers(!After any alphabet), $ and _. For example: $my_1stVariable.' +
    '<br/>'
);

document.write (
  'Variable must begin with a letter, $ or _. For example: $name, _name or name' +
    '<br/>'
);

document.write (' Variable names are case sensitive' + '<br/>');

document.write (
  'Variable names should not be JS keywords like if while or do' + '<br/>'
);
