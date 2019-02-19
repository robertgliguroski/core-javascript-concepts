# Behavior delegation in JS(Objects linked to other objects - OLOO)

## 1. Prototypes

In Javascript, classes do not exist. That is, if by "class" we mean the classical definition of an abstract pattern/blueprint for instantiating objects/instances. Javascript just has objects. The object itself describes what it can do, there is no blueprint(class) to describe the behavior of an object.

Therefore, it would follow that in Javascript, there is no inheritance, meaning the classical inheritance like the class-oriented languages have. 

There is a mechanism in Javascript which has been incorrectly named "prototypal inheritance", even though it has nothing to do with "inheritance".

Instead, the real nature of this mechanism is "creating links between objects". "Delegation" would be the appropriate term. When we use "existingObj.prototype = Object.create(someOtherExistingObj.prototype)" we are not instantiating an object/making an instance of a class, but we are simply creating a new object and we link that new object's internal [[Prototype]] to the object we have specified(provided in the parentheses)
