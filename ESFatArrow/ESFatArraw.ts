/* Fat Arrow*/
function FunctionWithOutArguments(){
    console.log("I AM DATA")
}
// Below are examples of function expressions - FirstFunction,SecondFunction,ThridFunction
var FirstFunction = function(msg){
    return "CJ "+msg;
}    
var SecondFunction = function(AnyFunctionCanBePassed){
    return AnyFunctionCanBePassed("Data");
} 
var ThridFunction = function(AnyFunctionCanBePassed){
    //console.log(AnyFunctionCanBePassed("Data")); //Line A
    //Above Line was given syntax Error : 
    //"Cannot invoke an expression whose type lacks a call signature. Type 'void' has no compatible call signatures".
    //The function that it returns has a call signature, but you told Typescript to completely ignore that by adding "any"  Keyword    
    //Line A is searching for same signature function Hence we must uncomment Line B to resolve the issue.
} 
//ThridFunction(FirstFunction); // Line B // Prints "CJ DATA"
//setTimeout(FunctionWithOutArguments,1000); // Print "I AM DATA"

/*******************************************Anonymous Functions******************************************************** */
(function(){
    //console.log("I Am Inside Anonoymus Function")
}());

setTimeout(function(){
   // console.log("I am inside Anonoymus Function with setTimeout")
},1000);
/********************************************Anonymous Functions******************************************************* */
/********************************************Arrows Functions******************************************************* */
setTimeout(() => {
    //console.log("I AM inside Arrow functions");
}, 1000);
//Anonymous function with Parameter
var Fourfunction = function(a,b){
    console.log(a + b);
}
Fourfunction(1,4);
//Arrow Function with parameter
var FourArrowFunction = (a,b) => {
    console.log(a + b);
}
FourArrowFunction(5,5);
//If you Arrow function body is only of one line then we must declare as shown below
var FiveArrowFunction = (a,b) => a + b;
console.log(FiveArrowFunction(5,6));
//We cannot add "Return" keyword. it is syntax error
//var FiveArrowFunction2 = (a,b) => return a + b;


/********************************************Arrows Functions******************************************************* */







