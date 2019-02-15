function Person(name) {
    this.name = name;
}

Person.prototype.hire = function () {
    console.log(this.name + " was hired by the UFC.");
}

function Fighter(name, weight) {
    Person.call(this, name);
    this.weight = weight;
}

Fighter.prototype = Object.create(Person.prototype);

Fighter.prototype.hire = function () {
    Person.prototype.hire.call(this);
    console.log(this.name + " weighs " + this.weight + "kg and will be fighting in the " + this.weightClass + " division.");
}

Fighter.prototype.assignToWeightClass = function (weightClass) {
    this.weightClass = weightClass;
}

var joeRogan = new Person("Joe Rogan");
joeRogan.hire();

console.log("************************************************************************");

var conorMcGregor = new Fighter("Conor McGregor", 69);
conorMcGregor.assignToWeightClass("Lightweight");
conorMcGregor.hire();

console.log("************************************************************************");

var andersonSilva = new Fighter("Anderson Silva", 80);
andersonSilva.assignToWeightClass("Middleweight");
andersonSilva.hire();