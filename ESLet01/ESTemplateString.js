/* Template String*/
var printthis = "Hello World"; //ES 6 allows double quotes " for adding the string
var printthis2 = 'Hello World'; // ES 6 allows single quotes ' for adding the string
var printthis3 = "Hello world"; // ES 6 allow black ticks ` for adding the string
//Black tick
var pt = "Hello" +
    " World";
console.log(pt); //Print Hello World in same line 
var pt2 = "Hello\n" +
    " World";
console.log(pt2);
//To achive below result we must add "\n" to break the line
//Print 
//Hello 
//World
var pt3 = "Hello \n World";
console.log(pt3);
//To achive below result we just have to use back tick to add strings
//Print 
//Hello 
//World    
//back tick allows string interpolation as shown below
var myName = "Chandrahas";
var pt4 = "\nHello\nworld\nmy name \nis\n" + myName;
console.log(pt4);
//t will print below results
//Hello
//world
//my name
//is
//Chandrahas
//String interoplation is not allow if we use double & single quotes to add the string in the variables
var pt5 = "chandrahas ${ name }";
console.log(pt5);
//Above code will print below results
//chandrahas ${ name }
