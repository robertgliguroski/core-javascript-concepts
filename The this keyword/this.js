/***
*	"this" is neither a reference to the function itself, nor is it a reference
	to the function’s lexical scope.
	"this" is actually a binding that is made when a function is invoked, and
	what it references is determined entirely by the call-site where the
	function is called.
*/

/******************************************************************************************************
* There are four rules that apply to determining where "this" points during the execution of a function
******************************************************************************************************
*/

/***********************************************************
* 1. Default binding

In this example, this.name resolves to the global "name" variable. If we examine the call-site to see
how the printName() function is called, we can conclude that none of the other rules(we will describe below)
apply as we can see that the printName() is called with a plain function reference, so when none of those rules
apply, the default binding applies instead.

*/

function printName() {
	console.log(this.name);
}

var name = "Jon Jones";
printName(); // Jon Jones


/***********************************************************
* 2. Implicit binding

When the call-site uses an object as a context to reference a function(in our example the fighterObj
is used to reference the printFighterName() function  which was declared separately but added
as a reference to that object later), the Javascript engine sort-of sees the function as being
"owned" by that object at the time the function is called. This is called the "implicit binding rule",
and it states that the object which is used to call the function will be used for that function's call
"this" binding. That is why in the example below we can see "Daniel Cormier" printed instead of 
"Cain Velasquez".
*/

function printFighterName() {
	console.log(this.fighterName);
}

var fighterName = "Cain Velasquez";

var fighterObj = {
	fighterName: "Daniel Cormier",
	printFighterName: printFighterName
};

fighterObj.printFighterName(); // Daniel Cormier


/***
* 3. Explicit binding

The explicit binding rules applies when we explicitly state what we want the "this" to be, by passing
an object to the call(..) or apply(..) functions. In this example, we pass the weightClassObj as a parameter
to the call() function which is called by the printWeightClass function object, which tells the 
printWeightClass function to use the "weightClassObj" as a binding for its "this".

*/

function printWeightClass() {
	console.log(this.weightClass);
}

var weightClassObj = {
    weightClass: "Heavyweight"
};

printWeightClass.call(weightClassObj); // Heavyweight



/***
* 4. new Binding

In Javascript, any function can be called with the "new" keyword in front of it, and that makes that
function call a "constructor call". There is no such thing as a "constructor", like we are used to
in traditional class-oriented languages. In the example below, the "fighterWeight" function is
just a regular function, which happens to be called with "new". It is not a "constructor" which
belongs to some class, neither it is instantiating an object of some class. But it does create
an object, a new object(which is not an instance of any class but it is a standalone object) 
which is then set as the "this" for the call of the "fighterWeight" function. This is called the
"new binding".
*/

function fighterWeight(weight) {
	this.weight = weight;
}

var fighterWeightObj = new fighterWeight(77);
console.log(fighterWeightObj.weight); // 77


/*******************************************
* DETERMINING this

In YDKJS, Kyle Simpson defines the rules of precedence for determining "this" as follows:

1. Is the function called with  new  (new binding)? If so,  this  is the
newly constructed object.
	var bar = new foo()
2. Is the function called with call or apply(explicit binding), even
hidden inside a  bind  hard binding? If so,  this is the explicitly
specified object.
	var bar = foo.call( obj2 )
3. Is the function called with a context (implicit binding), otherwise
known as an owning or containing object? If so, this is that context object.
	var bar = obj1.foo()
4. Otherwise, default the this(default binding). If in strict mode,
pick undefined, otherwise pick the global object.
	var bar = foo()
*/