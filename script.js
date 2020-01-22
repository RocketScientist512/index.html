/*var name="Rohan";
    var age = 25;
    var isMarried = 'yes';

    if (isMarried === 'yes'){

    	console.log(name+" is married");
    }

    else {
    		console.log(name+" is not married");

    }

    isMarried = 'false';

    if(isMarried){

    		console.log('Yes!');
    }else{
    	console.log('No');
    }

    if(23 =="23"){

    	console.log("Print");//this will print due to type coercion 
    }

    if(23 ==="23"){

    	console.log("Print");//this will not print due to type coercion 
    }

    //Boolean and Switch case

    var age = 16; 
    if(age<20){
    	console.log("John is a teenager");
    }
    else{
    	console.log("John is a Man");
    }

    //coding challenge -1 
    var RohanHeight = 30 ;
    var RohanAge = 30; 
    var PranavHeight = 30;
    var PranavAge = 30; 

    var unknownHeight = 30;
    var unknownAge = 30;

    var Rohan, Pranav, unknown; 

    Rohan = RohanHeight + 5 * RohanAge; 
    Pranav = PranavHeight + 5 * PranavAge; 
    unknown = unknownHeight + 5 * unknownAge;

    if (Rohan > Pranav && Rohan > unknown) {
    	console.log("Rohan wins, his score is " + Rohan);
    }
    else if (Rohan === Pranav && Rohan === unknown){
    	console.log("Its a Draw, Rohan's score is - " +  Rohan + " Pranav's score is -  " + Pranav + " unknown's score is -  " + unknown);
    }
    else if (Pranav >Rohan && Pranav>unknown){
    	console.log("Pranav Wins, his score is " + Pranav);
    }
    else {
    	console.log("unknown wins, his score is " + unknown);
    }

var markHeight = 1.78 ;
var johnHeight = 1.87 ;
var markWeight = 78;
var johnWeight = 27; 

var markBMI = markWeight / (markHeight * markHeight) ;
var johnBMI = johnWeight / (johnHeight * johnHeight) ;

var value = markBMI>johnBMI;

if (value == 0) {
    console.log("Mark has a greater BMI than John");
}

if (value == 1){
    console.log("John has a greater BMI than Mark");
}

//Boolean Logic

var firstname = "John"; 
var age = 16; 

if (age < 13) {
    console.log(firstname + "is a boy");
}
else if( age>=13 && age <20) {
    console.log(firstname + "is a teenager");
}
else {
    console.log(firstname + "is a man");
}

//Ternary Operator and Switch statement 

var firstname = "Mark";
var age = "25";

age >= 18 ? console.log(firstname + " drinks beer") : console.log(firstname  + " drinks juice");

var drink = age >=20 ? 'beer' : 'juice' ; 

var bar = 25 ; 

switch (bar) {
    case bar>=25 : console.log ("beer"); break; 
    case bar<25 && bar>20 : console.log("juice"); break; 
    case bar<=18 : console.log("water"); break; 
    default   : console.log ("Better luck next time"); 
}


//Evaluated in an If-Else condition
//Falsy values : undefined, NULL, 0,' ', NaN (Not a number)
//Truthy values : Not falsy values

var height ;

height = 23; 

if (height || height ==0){
    console.log("Variable is defined");
}
else{
    console.log("Variable is not defined");
}

//equality operators 

if(height == '23'){
    console.log("The == does type coercion") // 23 and '23' are not similar. 
}

/********Coding Challenge 
//

***/
/*
var john1 = 109,john2 = 124,john3=103 ;
var mike1 = 116, mike2 =100 ,mike3 =120 ;
var mary1 =97 ,mary2 =134 , mary3= 105;

var avgJohn = (john1 + john2 + john3)/3 ;
var avgMike = (mike1+mike2+mike3)/3; 
var avgMary = (mary1+mary2+mary3)/3;

console.log(avgJohn,avgMike,avgMary);

if(avgMike>avgJohn && avgMike>avgMary){
    console.log('Mike\'s team wins in average - ' + avgMike);
}
else if(avgJohn === avgMike && avgMike === avgMary){
    console.log('All teams have the same score');
}
else if(avgJohn>avgMary && avgJohn>avgMike){
    console.log('John\'s team wins in average - ' + avgJohn );
}
else{
    console.log('Mary\'s team wins in average');
}*


//Functions

function calculateAge(birthYear){
    return 2018 - birthYear; 
}

var AgeJohn = calculateAge(1990);
var AgeMax = calculateAge(1991);
var AgeRon = calculateAge(1980);
var AgePeter = calculateAge(1999);

console.log(AgeJohn,AgePeter,AgeRon,AgeMax);

function yearsuntilretiement(Year,firstname){
    var age = calculateAge(Year);
    var retirement= 65-age;
    if(retirement>0){
         console.log(firstname + ' retires in ' + retirement + ' years');
    }
    else{
        console.log(firstname + ' is already retired.');
    }
   
}

yearsuntilretiement(1990,'John');
yearsuntilretiement(1980,'Ron');
yearsuntilretiement(1999,'Peter');
yearsuntilretiement(1939,'Mel');

*/
/******************
Function Statements and Function Expressions
*****/ 

//Function Declaration


/**
//Function Expression
var whatdoyoudo = function(job,firstname){
    switch(job){
        case 'teacher' : return firstname + ' teaches kids how to code' ;

        case 'driver' : return firstname + ' teaches kids how to drive' ;

        case 'designer' : return firstname + ' teaches kids how to design' ;

        default: return firstname + ' does something else' ;
    }
}

console.log(whatdoyoudo('teacher','john'));
console.log(whatdoyoudo('driver','jake'));
console.log(whatdoyoudo('designer','josh'));




//Arrays 


//Initialised new array
var Names = ['john', 'Mark', 'Jane'];
var Years = new Array(1990, 1994, 1998); 

console.log(Names);
console.log(Names.length);


//mutated array data
Names[1] = 'Ben'; 
Names[4] = 'Mary'; 
console.log(Names);

//Different data types

var John = ['John', 'Smith', '37', 'Single', 'designer']; 
console.log(John);
John.unshift('Mr.');
console.log(John);
John.push('blue');
console.log(John);
John.pop();
console.log(John);
John.shift();
console.log(John);

console.log(John.indexOf('37'));

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a desginer' ;

console.log(isDesigner);



//Coding Challenge #3 

function FindTip(Bill){
    var percentage ;
    if(Bill<50){
        percentage = 0.2 ;
    }
    else if(Bill>=50 && Bill<200){
        percentage = 0.15;
    }
    else {
        percentage = 0.1;
    }
    return Bill*percentage; 
}

var Bills = [124,48,268] ;

var tip =[FindTip(Bills[0]),FindTip(Bills[1]),FindTip(Bills[2])]; 

var Total = [Bills[0]+tip[0],Bills[1]+tip[1],Bills[2]+tip[2]];

console.log(tip);
console.log(Total);



//Objects and Properties

//In arrarys, order matters, but not in Objects. 
//object literals is the way of defining the function using the syntax {}

var Mohan = {

    firstname : 'Mohan', //key value 
    lastname  : 'Kumar',
    age : 23,
    birthYear : 1995,
    family : ['Sushil', 'Ritu' , 'Mukesh', 'Sugandha'],
    job : 'teacher',
    isMarried : false
};
console.log(Mohan.age);
console.log(Mohan['lastname']);
var x = 'birthYear';
console.log(Mohan[x]);
Mohan.job= 'Web Developer';
Mohan['isMarried'] = 'True'; 
console.log(Mohan);

//new object
var krishna = new Object();
krishna.name = 'Krishna';
krishna.age = '21';
krishna['lastname'] = 'Kumar'; 

console.log(krishna);



//Object and Methods 
//we can attach functions to objects. That is called methods

var Mohan = {

    firstname : 'Mohan', //key value 
    lastname  : 'Kumar',
    age : 23,
    birthYear : 1998,
    family : ['Sushil', 'Ritu' , 'Mukesh', 'Sugandha'],
    job : 'teacher',
    isMarried : false,
    calcAge : function(birthYear){
        this.age = 2018 - this.birthYear; //this.brithyear means Mohan.birthYear
    }
};

Mohan.calcAge();
console.log(Mohan);



var Rohan = {
        firstname : "Rohan", 
        lastname : "Shorey", 
        age : 23, 
        height : "1.77", 
        weight : "90",

        calcBMI : function(weight,height){
            this.value = this.weight/(this.height*this.height); 
        }
};

Rohan.calcBMI(); 
console.log(Rohan); 

var Pranav = {
        firstname : "Pranav", 
        lastname : "Shorey", 
        age : 18, 
        height : "1.82", 
        weight : "70",

        calcBMI : function(weight,height){
            this.value = this.weight/(this.height*this.height); 
        }
};

Pranav.calcBMI(); 
console.log(Pranav); 


if (Rohan.value > Pranav.value) {
    console.log("Rohan has a higher BMI");
}

else if (Rohan.value === Pranav.value){

    console.log("They have the same BMI value");
}

else {
    console.log("Pranav has a higher BMI");
}

**/

//Loops and Iterations 
//Tip Calculator
//less than 50 ->20%, between 50 & 200 -> 15% , more than 200 -> 10% 
//$124, $48, $268 , $180 , $42 

//My Method
/*var bill = [124,48,268, 180,42];
console.log(bill);
var tip = []; 

for (var i = 0; i <= bill.length - 1; i++) {
    if (bill[i] <50) {
        tip[i] = bill[i] * 0.2 ;
    }
    else if(bill[i] >=50 && bill[i] < 200) {
        tip[i] = bill[i] * 0.15;
    }
    else if (bill[i] >200) {
        tip[i] = bill[i] * 0.1 ; 
    }
    else {
        console.log("did you even eat");
    }
}
    
    console.log(tip); 

    var total = []; 
    for (var i = 0; i <= bill.length-1; i++) {
        total[i] = bill[i] + tip[i] ; 
    }
    console.log(total); 

//Correct Method
var John =  {
    fullname : 'John Smith', 
    bill :  [124,48,268, 180,42], 
    calcTips : function(bill) {
        this.tip = [];
        this.total = [];

        for (var i = 0; i <= this.bill.length - 1; i++) {
            if (this.bill[i] <50) {
             this.tip[i] = this.bill[i] * 0.2 ;
             }
            else if(this.bill[i] >=50 && this.bill[i] < 200) {
            this.tip[i] = this.bill[i] * 0.15;
            }
            else if (this.bill[i] >200) {
             this.tip[i] = this.bill[i] * 0.1 ; 
            }
            else {
            console.log("did you even eat");
            }

        this.total[i] = this.bill[i] + this.tip[i] ; 
        }
    }
}

var Mark = {
    fullname : "Mark Johnson",
    bill : [77,375,110,45],
    calcTip : function(){
        this.tip =[];
        this.total = [];

        for (var i = 0; i <= this.bill.length - 1; i++) {
            if (this.bill[i] <100) {
             this.tip[i] = this.bill[i] * 0.2 ;
             }
            else if(this.bill[i] >=100 && this.bill[i] < 300) {
            this.tip[i] = this.bill[i] * 0.1;
            }
            else if (this.bill[i] >300) {
             this.tip[i] = this.bill[i] * 0.25 ; 
            }

            this.total[i] = this.bill[i] + this.tip[i] ;
        }
    }
    
}

function average(value) {
    var avg =0; 
    for (var i = 0; i <= value.length-1 ; i++){
        avg += value[i]; 
    }
    var fam = avg/value.length ;
    return fam; 
}

Mark.calcTip();
John.calcTips();
console.log(John,Mark);

John.average = average(John.tip);
Mark.average = average(Mark.tip);
console.log(John.average,Mark.average);

    if (John.average > Mark.average) {
                console.log("John\'s family has a better average");
             }

    else{
                console.log("Mark\'s family has a better average");
             }
    


//******** Lecture : Hoisting ***********

calculateAge(1950);


function calculateAge(year){//function declaration
//we can declare function later on

    console.log(2016-year);
}

//calculateAge(1990);



var retirement = function (year){//function expression
    console.log(65 - (2016-year));
}

retirement(1990);

//variables
console.log(age);//value will be undefined
var age = 23 ;
console.log(age);

function foo(){
    var age = 65; 
    console.log(age); //will be 65
}
foo();
console.log(age); //will be 23

//Lecture : This Keyword

//console.log(this);

calculateAge(1985);
function calculateAge(year){
    console.log(2016-year);
    console.log(this);
}
*/
var john ={
    name : 'John',
    yearofBirth : 1981,
    calculateAge: function(){
        console.log(this);
        console.log(2018-this.yearofBirth);
/*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
}

john.calculateAge();

var rohan = {
    name : "Rohan",
    yearofBirth: 1994
};
//using Method Borrowing 
rohan.calculateAge=john.calculateAge;
rohan.calculateAge();













