/***
 * The Revealing Module is one of the most powerful patterns which uses the power of closures.
 * The SignWithTheUFC() function returns an object which has references to our two methods(hire()
 * and assignToWeightClass()), * but it does not have references to the inner data variables(name 
 * and weightClass). This object that we * return from our function is sometimes referred to as 
 * "a public API", because when we call the  * SignWithTheUFC() function, this returned object is
 * assigned to the "newSigning" variable and those * methods that we return through our "public API"
 * can now be accessed by that newSigning object.
 * 
 * But the main thing which enables all of this to function correctly(and which makes sure the correct name and
 * weight class will be printed when those two methods are called) is again, the closure. Those two functions
 * have closure over the inner scope of the module instance and can access the private data properties.
 */

function SignWithTheUFC() {
	var name = "George St Pierre";
	var weightClass = "welterweight";

	function hire() {
		console.log(name + " was hired by the UFC.");
	}

	function assignToWeightClass() {
		console.log(name + " will be competing in the " + weightClass + " division.");
	}

	return {
		hire: hire,
		assignToWeightClass: assignToWeightClass
	};
}
var newSigning = SignWithTheUFC();
newSigning.hire(); // George St Pierre was hired by the UFC.
newSigning.assignToWeightClass(); // George St Pierre will be competing in the welterweight division.