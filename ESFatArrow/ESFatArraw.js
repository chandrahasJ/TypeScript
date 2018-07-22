/* Fat Arrow*/
function FunctionWithOutArguments() {
    console.log("I AM DATA");
}
// Below are examples of function expressions - FirstFunction,SecondFunction,ThridFunction
var FirstFunction = function (msg) {
    return "CJ " + msg;
};
var SecondFunction = function (AnyFunctionCanBePassed) {
    return AnyFunctionCanBePassed("Data");
};
var ThridFunction = function (AnyFunctionCanBePassed) {
    //console.log(AnyFunctionCanBePassed("Data")); //Line A
    //Above Line was given syntax Error : 
    //"Cannot invoke an expression whose type lacks a call signature. Type 'void' has no compatible call signatures".
    //The function that it returns has a call signature, but you told Typescript to completely ignore that by adding "any"  Keyword    
    //Line A is searching for same signature function Hence we must uncomment Line B to resolve the issue.
}(function () {
    //console.log("I Am Inside Anonoymus Function")
}());
setTimeout(function () {
    // console.log("I am inside Anonoymus Function with setTimeout")
}, 1000);
/********************************************Anonymous Functions******************************************************* */
/********************************************Arrows Functions******************************************************* */
setTimeout(function () {
    //console.log("I AM inside Arrow functions");
}, 1000);
//Anonymous function with Parameter
var Fourfunction = function (a, b) {
    //console.log(a + b);
};
Fourfunction(1, 4);
//Arrow Function with parameter
var FourArrowFunction = function (a, b) {
    // console.log(a + b);
};
//FourArrowFunction(5,5);
//If you Arrow function body is only of one line then we must declare as shown below
var FiveArrowFunction = function (a, b) { return a + b; };
//console.log(FiveArrowFunction(5,6));
//We cannot add "Return" keyword. it is syntax error
//var FiveArrowFunction2 = (a,b) => return a + b;
/********************************************Arrows Functions******************************************************* */
//Calling Context
var myObj = {
    name: "CJ",
    sayLater: function () {
        console.log(this.name);
    }
};
//myObj.sayLater();
//Above will print CJ, 
//In sayLater function "this" is pointing to  object "myObj".
//As calling context is "myObj" thus "this" is pointing to  object "myObj".
var mySetTimeObj = {
    name: "CJ",
    sayLater: function () {
        console.log("OutSide setTimeOut :> " + this.name); // Line A
        setTimeout(function () {
            console.log("Inside setTimeout :> " + this.name); //Line B
        }, 1000);
    }
};
//mySetTimeObj.sayLater();
//Above will below results 
//Line A :> OutSide setTimeOut :> CJ //Calling Context = "mySetTimeOut"
//Line B :> Inside setTimeout :> undefined //Calling Context = "Unknown" 
//In Line A, calling context is "mySetTimeObj" hence "this" is pointing to Object "mySetTimeObj"
//In Line B, setTimeout will invoke the anonymous function itself and its calling context can be anthting other than "mySetTimeObj"
//As it will be invoked after execution of "mySetTimeObj" has been finished. It will be taken over by setTimeOut(expression,timeout);
//Instablitiy of "this" Common Solution in ES 5
var mySelfObj = {
    name: "CJ",
    sayLater: function () {
        console.log(this);
        var _self = this; //Line A
        setTimeout(function () {
            console.log(_self); //Line B
            console.log(_self.name); // Line C
        }, 1000);
    }
};
//mySelfObj.sayLater();
//In Line A : We assigning the object "this" to new variable "self"
//Line B & C, We are using "self" variable to get the values. 
//As "this"  is pointing to "UNKNOWN" object 
//Using variable "self" the calling context persits and we were able to get the value of name property.
//ES 6 -> Arrow Function 
//Arrow Function : Captures the "this" keyword from surrounding context 
var myArrowObj = {
    name: "CJ",
    sayLater: function () {
        var _this = this;
        //this == myArrowObj
        console.log(this); //Line A
        setTimeout(function () {
            //Since Arrow Function captures the "this" keyword from surrounding context.
            console.log(_this); //Line B
            console.log(_this.name); //Line C
        }, 1000);
    }
};
myArrowObj.sayLater();
//Arrow function solves the problem as this is pointing to the actual calling context "myArrowObj" inside the setTimeout
//due to it behaviour of capturing the "this" keyword frin surrounding context.
//We were able to print the name property 
