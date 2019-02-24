/***
* Prints "Conor McGregor" because all declarations are processed at compilation time,
* but the assignment is left in place for the execution phase.
* The code below is actually processed as:
			* var conorMcGregor;
			* conorMcGregor = "Conor McGregor";
			* console.log(conorMcGregor);
*/
conorMcGregor = "Conor McGregor";
var conorMcGregor;
console.log(conorMcGregor);


/***
* Prints undefined. The code below is actually processed as:
			* var andersonSilva;
			* console.log(andersonSilva);
			* andersonSilva = "Anderson Silva";
* So we're printing a declared but unassigned variable
*/
console.log(andersonSilva);
var andersonSilva = "Anderson Silva";


/***
* Hoisting is per-scope. So var croCop is hoisted to the top of the function,
	while the function is hoisted to the top of the enclosing scope(in this case the global scope).
	So the below function is actually processed as: 
* function printName() {
	var croCop;
	console.log(croCop);
	croCop = "Cro Cop";
	}
	printName();
*
*/
printName();

function printName() {

	console.log(croCop); // undefined
	var croCop = "Cro Cop";

}


/***
* While function declarations are hoisted, function expressions are not.
* The below code is actually interpreted as:
	var getName;
	getName(); // TypeError
	getFighterName(); // ReferenceError 
	getName = function(){
		var getFighterName = ...self...
		//...
	}
*/
getName(); // TypeError
getFighterName(); // ReferenceError
var getName = function getFighterName() {
// ...
};