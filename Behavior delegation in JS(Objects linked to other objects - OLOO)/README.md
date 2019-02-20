# Behavior delegation in JS(Objects linked to other objects - OLOO)

## 1. Prototypes

In Javascript, classes do not exist. That is, if by "class" we mean the classical definition of an abstract pattern/blueprint for instantiating objects/instances. Javascript just has objects. The object itself describes what it can do, there is no blueprint(class) to describe the behavior of an object.

Therefore, it would follow that in Javascript, there is no inheritance, meaning the classical inheritance like the class-oriented languages have. 

There is a mechanism in Javascript which has been incorrectly named "prototypal inheritance", even though it has nothing to do with "inheritance".

Instead, the real nature of this mechanism is "creating links between objects". "Delegation" would be the appropriate term. When we use "existingObj.prototype = Object.create(someOtherExistingObj.prototype)" we are not instantiating an object/making an instance of a class, but we are simply creating a new object and we link that new object's internal [[Prototype]] to the object we have specified(provided in the parentheses)

The "Fighter_Prototype.js" file is an example of this. In there, we define two functions(Person and Fighter) whose "prototype objects" we will be using to define all the behavior we want to have later in the objects which will be based on Person and Fighter. So what we're really interested in is having the "joeRogan" object which is linked to Person, and having the "conorMcGregor" and "andersonSilva" objects which are linked to Fighter, which in turn is linked to Person. For each of them(let's take the "conorMcgregor" object as an example, we are only interested in that object and the objects it is linked to.

 And yet, when we define the "Fighter" function, it has a .prototype link to its default object, but that's not the link we want(we want it to be linked to the "Person.prototype" object, so we need to create a new object which is linked in the correct way. Then, in Fighter's "hire()" function, if we want to reuse behavior defined in Person's "hire()" function, we need to use "Person.prototype.hire.call(this);" which is not a pretty syntax, at all. Additionally, we now have two functions(Person and Fighter) which we do not need and do not use. We're only interested in the objects, the functions were just side-effects and added unneeded complexity to our code.
