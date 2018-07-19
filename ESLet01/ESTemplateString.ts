/* Template String*/

let printthis = "Hello World"; //ES 6 allows double quotes " for adding the string
let printthis2 = 'Hello World'; // ES 6 allows single quotes ' for adding the string
let printthis3 = `Hello world`; // ES 6 allow black ticks ` for adding the string

//Black tick
let pt = "Hello" + 
         " World";
console.log(pt); //Print Hello World in same line 
let pt2 = "Hello\n" + 
         " World";
console.log(pt2); 
//To achive below result we must add "\n" to break the line
//Print 
//Hello 
//World
let pt3 = 
`Hello 
 World`
console.log(pt3); 
//To achive below result we just have to use back tick to add strings
//Print 
//Hello 
//World    

//back tick allows string interpolation as shown below
let myName = "Chandrahas";
let pt4 =
`
Hello
world
my name 
is
${ myName }`;
console.log(pt4);
//t will print below results
//Hello
//world
//my name
//is
//Chandrahas

//String interoplation is not allow if we use double & single quotes to add the string in the variables
let pt5  = "chandrahas ${ name }";
console.log(pt5);
//Above code will print below results
//chandrahas ${ name }
