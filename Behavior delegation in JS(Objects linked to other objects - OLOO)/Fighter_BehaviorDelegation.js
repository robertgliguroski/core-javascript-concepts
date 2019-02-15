var Person = {
    init: function (name) {
        this.name = name;
    },
    hire: function () {
        console.log(this.name + " was hired by the UFC.");
    }
};

var Fighter = Object.create(Person);

Fighter.setup = function (name, weight) {
    this.init(name);
    this.weight = weight;
}

Fighter.hireFighter = function () {
    this.hire();
    console.log(this.name + " weighs " + this.weight + "kg and will be fighting in the " + this.weightClass + " division.");
}

Fighter.assignToWeightClass = function (weightClass) {
    this.weightClass = weightClass;
}

var joeRogan = Object.create(Person);
joeRogan.init("Joe Rogan");
joeRogan.hire();

console.log("************************************************************************");

var conorMcGregor = Object.create(Fighter);
conorMcGregor.setup("Conor McGregor", 69);
conorMcGregor.assignToWeightClass("Lightweight");
conorMcGregor.hireFighter();

console.log("************************************************************************");

var andersonSilva = Object.create(Fighter);
andersonSilva.setup("Anderson Silva", 80);
andersonSilva.assignToWeightClass("Middleweight");
andersonSilva.hireFighter();