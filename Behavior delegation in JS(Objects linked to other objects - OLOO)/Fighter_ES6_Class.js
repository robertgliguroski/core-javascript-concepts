class Person {
    constructor(name) {
        this.name = name;
    }
    hire() {
        console.log(this.name + " was hired by the UFC.");
    }
}

class Fighter extends Person {
    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }
    hire() {
        super.hire();
        console.log(this.name + " weighs " + this.weight + "kg and will be fighting in the " + this.weightClass + " division.");
    }
    assignToWeightClass(weightClass) {
        this.weightClass = weightClass;
    }
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