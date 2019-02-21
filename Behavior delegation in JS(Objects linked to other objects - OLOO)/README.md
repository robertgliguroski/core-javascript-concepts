# Behavior delegation in JS(Objects linked to other objects - OLOO)

A small example that shows why choosing to describe the [[Prototype]] mechanism in the context of "class" or "inheritance" is not the best choice, and how it can be better described using the "behavior delegation" pattern, instead of "class/inheritance". Inspired by Kyle Simpson's "this & Object Prototypes" book.

## 1. Prototypes

In Javascript, classes do not exist. That is, if by "class" we mean the classical definition of an abstract pattern/blueprint for instantiating objects/instances. Javascript just has objects. The object itself describes what it can do, there is no blueprint(class) to describe the behavior of an object.

Therefore, it would follow that in Javascript, there is no inheritance, meaning the classical inheritance like the class-oriented languages have. 

There is a mechanism in Javascript which has been incorrectly named "prototypal inheritance", even though it has nothing to do with "inheritance".

Instead, the real nature of this mechanism is "creating links between objects". "Delegation" would be the appropriate term. When we use "existingObj.prototype = Object.create(someOtherExistingObj.prototype)" we are not instantiating an object/making an instance of a class, but we are simply creating a new object and we link that new object's internal [[Prototype]] to the object we have specified(provided in the parentheses)

The "Fighter_Prototype.js" file is an example of this. In there, we define two functions(Person and Fighter) whose "prototype objects" we will be using to define all the behavior we want to have later in the objects which will be based on Person and Fighter. So what we're really interested in is having the "joeRogan" object which is linked to Person, and having the "conorMcGregor" and "andersonSilva" objects which are linked to Fighter, which in turn is linked to Person. For each of them(let's take the "conorMcgregor" object as an example, we are only interested in that object and the objects it is linked to.

 And yet, when we define the "Fighter" function, it has a .prototype link to its default object, but that's not the link we want(we want it to be linked to the "Person.prototype" object, so we need to create a new object which is linked in the correct way. Then, in Fighter's "hire()" function, if we want to reuse behavior defined in Person's "hire()" function, we need to use "Person.prototype.hire.call(this);" which is not a pretty syntax, at all. Additionally, we now have two functions(Person and Fighter) which we do not need and do not use. We're only interested in the objects, the functions were just side-effects and added unneeded complexity to our code.

## 2. ES6 Class

The "class" keyword was introduced as of ES6, and at first it might seem like it offers a new "mechanism", i.e. a class. But it doesn't, since "class" is mostly just syntactic sugar on top of the existing [[Prototype]] mechanism. What's happening behind the curtains is that we still get the same behavior as with the prototype example. Definitions are still not copied at declaration time, as they are in traditional class-oriented languages. Also, the "class" syntax does not provide a way to declare class member properties(only methods).

The syntax does look much nicer, though. If you compare the code in "Fighter_Prototype.js" with the one in "Fighter_ES6_Class.js", then it is obvious the class syntax makes the code looks cleaner and more concise. Some benefits of the new class syntax are that are no more references to ".prototype" all throughout the code, we can use the familiar "extends" keyword for the "child class" to extend the "parent class" and we also have access to a "super()" call. 

But, while all of these things seem nice and useful, they, in fact, make it harder to understand the difference between traditional classes and delegated objects. Furthermore, the class syntax makes us think we are getting a static definition of something which will be instantiated later. This, in turn, covers up the most powerful aspects of Javascript - that the language is dynamic in its nature and that it works by way of creating live delegation links between objects.

## 3. Behavior delegation

So, while the class syntax does make our code look much better, it still fails to utilize one of the most powerful mechanism Javascript has to offer, which is the delegation links between objects. 

We will now look at a third variation of the same code we saw in our two previous examples("Fighter_Prototype.js" and "Fighter_ES6_Class.js"), a file which is called "Fighter_BehaviorDelegation.js".

According to Kyle Simpson, the most important thing to remember when talking about "inheritance", "classes" and objects/prototypes in Javascript is that the actual mechanism we need to utilize is all about objects being linked to other objects.

If we have a look at the "Fighter_BehaviorDelegation.js" file, we notice straight away that we do not define functions, nor we define classes, but we just define objects, pure objects without any bluepring from which we will instantiate our objects. This object will hold its own data and behavior. If we want to reuse some functionality that a different object has, we do not make it "extend" that other object, but we simply "link" it to that other object, allowing it to delegate to the other object whenever needed.

Kyle Simpson calls this style of code "OLOO - Objects Linked to Other Objects". It's a bit of a strange-sounding name for me, but I think that when you think about it - it correctly defines and displays what is actually happening in Javascript. It explains the mechanism which allows us to use behavior delegation. The links between those objects allow Javascript objects to be able to delegate to different objects and reference their properties/methods when needed and if not found on the original object.

If we have a look at our behavior delegation example, we will see this line:

var Fighter = Object.create(Person);

which creates a link between the Fighter object and the Person object(please note that my objects are capitalized only so that they are equivalent to the functions/classes in the previous examples, otherwise a better approach would be to name them so they start with a lowercase letter). 

Later, when i define the "hireFighter()" method of the Fighter object, I can reference and use the "hire()" method, which is defined on the Person object, by simply calling "this.hire();". Note that I do not need any "prototype" references in order to do that. 

//TODO: Elaborate on the difference in code between the three approaches here before concluding this section

Behavior delegation is a powerful design pattern, and is very different than the ideas in class-oriented langauges, like inheritance, parent and child classes, polymorphism etc.
