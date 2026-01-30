/* 
* Task-1
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

//Solutions
console.log("Task 1")

const burgerPrice = 650;
//apling condition
if(burgerPrice > 500){
    console.log("Free Coke");
}else{
    console.log("Coke: 30tk");
}


/* 
* Task-2
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

//Solutions
console.log("Task 2")

const weight = 60;
const heightFeet = 5 ; 
const heightInch = 6 ;
//convert feet & inch into meter
const height = (5*0.3048) + (6*0.0254);
console.log("Height in meter: " + height.toFixed(3));
const bmi = weight / (height*height);
console.log("your BMI Numer: " + bmi.toFixed(3))

if(bmi < 18.5){
    console.log("you are underweight")
}else {
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log("you are normal.");
    }else{
        if(bmi >= 25 && bmi <= 29.9){
            console.log("you are overweight.")
        }else {
            console.log("you are obese.");
        }
    }
}