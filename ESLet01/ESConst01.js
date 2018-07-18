"use strict";
//const foo;
// Const must be declared & intitized at the same time
// Hence Above statement is giving complitiion & syntax error 
//Sytnax ERROR : 'const' declarations must be initialized.
//Compile Time ERROR : Missing initializer in const declaration
//const foo = 1; // Proper Way to Use 'const' keyword
//foo = 2;
//Above line will give ERROR
//Syntax Error "Cannot assign to 'foo' because it is a constant or a read-only property."
//TypeError: Assignment to constant variable.
//re-assignement to a constant variable is not allowed.
function fun() {
    if (true) {
        var tmp = 'Print This';
        console.log(tmp); //No Error
    }
    //console.log(tmp);
    //ReferenceError: tmp is not defined
    //As const has block scoped 
}
//fun();
//let, var : mutable 
//mutable variables can change over time
//const : immutable 
//immutable variables can't change over time
//Pitfall  const keyword - 
//const foo = "data";
//foo = "data2"; Line A
//console.log(foo);
//Invalid Assignment Operation on Line A. As Re-Assignment is not allowed.
var foo = [];
//foo = []; // Line A 
foo['property'] = 'Property Of the Const can be changed'; //Line B
//console.log(foo.property);
//Invalid Assigment Operation on Line A. since Re-Assigment is not valid operation for const keyword
//Valid Assignment Operation on Line B. Prints 'Property Of the Const can be changed';
//We can't change the value but we can changed the property inside the value of the const keyword.
var boo = Object.freeze({});
//boo["property"] = 'This will be undefined' //Line  A
//console.log(boo.property);
//Since we have used  Object.freeze({}); while assigning value to const 
//it will be perfectly immutable variable
//We can assign a value to its property but it will be neglected/ingored by the transpiler  
var goo = Object.freeze({});
//goo["property"] = 'This will be undefined' //Line  A
//console.log(goo.property);
//"use strict"; -> this line should be added on the first line of the ts file.
//using strict mode Line A will give us error 
//TypeError: Cannot add property property, object is not extensible 
//Transpiler only give us error if we use both  Object.freeze() & strict mode for const keyword.
var coo = Object.freeze({
    "property1": "Data1"
});
coo["property2"] = "Data2"; // This Line will be ignored by transpiler
console.log(coo.property1);
