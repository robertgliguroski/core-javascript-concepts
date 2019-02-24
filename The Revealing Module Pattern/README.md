# The Revealing Module Pattern

The Revealing Module is one of the most powerful patterns which uses the power of closures.

Kyle Simpson defines these two rules as requirements for the module pattern to be exercised:

1. There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).

2. The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope,
and can access and/or modify that private state. 

He further states that: "An object with a function property on it alone is not reallya module. An object that is returned from a function invocation that only has
data properties on it and no closured functions is not really  a module, in the observable sense."

In the "The Revealing Module Pattern.js" file, I give an example together with an explanation for this pattern, and how it relates to the concepts of lexical 
scope and closure.