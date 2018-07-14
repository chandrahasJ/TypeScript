{
    var variableInsideTheBlock = "Block";
}
// No Error
// But in other Lanuages It will cause an Error
// Since Variable is called outside of the scope.
//console.log(variableInsideTheBlock);
function hello() {
    var a = 10;
    console.log("Inside the Function Scope:> " + a); //No Error
}
// hello(); 
//console.log(a); //a is not defined 
function functionLevelScope() {
    var a = "function level variable";
    for (var index = 0; index < 10; index++) {
        var a = "block level"; // This will override the above "a".
    }
    //In Other Lanuages, this will print "function level variable"
    //but in Javascript it will print "block level variable"
    console.log(a);
}
//functionLevelScope();
//To get around this above issue We use IIFE's immediately invoked function expressions.
function functionLevelScope_IIFE() {
    var a = "function level variable"; //Line A
    for (var index = 0; index < 5; index++) {
        //Waring : IIFE Below
        (function () {
            var a = "IIFE Level Variable"; // Line B
        })();
    }
    //Below will print "Functtion level variable"
    //Since function has there own scope 
    //Line A & Line B are in different scope now
    console.log(a);
}
//functionLevelScope_IIFE();
/*************************************LET************************************************ */
function functionWithLet() {
    var a = "function level scope";
    for (var i_1 = 0; i_1 < 10; i_1++) {
        var a_1 = "Let Scope ";
    }
    //Prints "function level scope"
    //Since Line B variable is declared with "let" keyword
    console.log(a);
}
functionWithLet();
/*************************************LET************************************************ */
//Interview Question
// What will Line B will print & How to optimize the below code
var funcs = [];
for (var i = 0; i <= 5; i++) {
    var y = i;
    funcs.push(function () {
        console.log("Variable declared using var keyword :> " + y);
    });
}
funcs.forEach(function (func) {
    func(); // Line B
});
// Line B will print 5 times "5"
// As variable y has global level scope(HOISTING).
//To Solve the above problem we must use let keyword on "y" variable
console.log("/*************************************{y}************************************************ */");
funcs = [];
var _loop_1 = function () {
    var y_1 = i;
    funcs.push(function () {
        console.log("Variable declared using let keyword :> " + y_1);
    });
};
for (var i = 0; i <= 5; i++) {
    _loop_1();
}
funcs.forEach(function (func) {
    func(); // Line B
});
// Line B will now print numbers from 0 to 5 
// Since we have declared variable with let keywords
