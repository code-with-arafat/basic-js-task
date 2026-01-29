/* 
* Task-1
    You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
    Input:
    The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
*/

//Solutions
console.log("Task 1")

var totalMoney = 1000 ;
var orangePrice = 400 ;
var applePrice = 320 ;

var totalBill = orangePrice + applePrice ;
console.log ("Your total Bill: " + totalBill);

var returnMoney = totalMoney - totalBill ;
console.log ("Your return Money: " + returnMoney) ;



/*
*   Task-2
    Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
    Input:
    The first line of the input is the marks of the five subjects mentioned above, respectively.

    Output:
    Print the result in 2 decimal places.
*/

//Solutions 
console.log("Task 2");

var mathematics = 78 ;
var biology = 82 ;
var chemistry = 90 ;
var physics = 88 ;
var bangla = 66 ;

var totalMarks = mathematics + biology + chemistry + physics + bangla ;
console.log ("Your Tolal Mark: " + totalMarks) ;

var averageMark = totalMarks / 5 ;
console.log ("your Avarage mark : " + averageMark);



/*
*   Task-3
    You task is to divide the given number by 5 and show the remainder as the output.
    Input:
    The first line of the input contains the number.
    Output:
    Print the remainder.
*/

//Solution 
console.log ("Task 3")

var num = 86 ;
var remainder = num % 5 ;
console.log ("Remainder is: " + remainder);


/*
*   Task-4
    What will be the result of the following codes:
    var a = isNaN(‘11’);
    var a = isNaN(2-10);

    Explain your answers.
*/

//Solutions
console.log("Task 4");
var a = isNaN("11");
console.log(a);

var b = isNaN(2-10);
console.log(b)

// NAN(Not A Number): if the input is not a number then return "true" and if the input is a valid number then return "false". 