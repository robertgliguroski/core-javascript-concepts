/***
 * 
In the example below, when this line executes:

    var getFighterName = getName(); 

we would expect the inner scope of the getName() function to be garbage-collected after the execution
of that function has ended. This is where closure comes up. The Javascript engine realizes that the inner 
scope of getName() is still in use by someone, and so it is not cleared as unused. The function
printName() is the one using the inner scope of getName(), simply because it was declared inside the
getName() function and has a lexical scope closure over the inner scope of getName(). Everything
inside of this scope is kept alive for the printName() function to reference anytime it needs it later.
This ability for the printName() function to be able to reference this scope later is called "closure".
This mechanism(closure) is observed when the printName() function is invoked outside of its
author-time lexical scope, i.e. outside of the scope in which it was declared(This happens when we
return the printName function reference and later assign it to the getFighterName variable
which is later executed outside of the scope where printName was declared).
*/

function getName() {
    var conorMcGregor = "Conor McGregor";

    function printName() {
        console.log(conorMcGregor);
    }

    return printName;
}

var getFighterName = getName();
getFighterName(); // "Conor McGregor" -- This is closure



/***
* 	
    The printFighterName() function includes a call to setTimeout() which has a function named 
    printDelayed() passed to it with a delay of 1000 miliseconds. This printDelayed() function
    prints the passed in fighter name(passed in as a paramater to the enclosing function printFighterName()).
    The most important thing to note here is that the printDelayed() function has a scope closure over the 
    scope of printFighterName(), which means it will retain the reference to the fighterName variable 
    after we have executed printFighterName(). That is why 1 second after printFighterName has finished
    executing, we are still able to see the "Nate Diaz" output. Because printDelayed() was able to still
    hold the passed-in value when it was called by the setTimeout function. because of closure.

*/
function printFighterName(fighterName) {

    setTimeout(function printDelayed(){
        console.log(fighterName);
    }, 1000);    

}
    
printFighterName("Nate Diaz");