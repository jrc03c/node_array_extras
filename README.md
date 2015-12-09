_NOTE: I don't know what I'm doing. Sorry for any inconvenience._

To be quite honest, I always forget the stupid little quirks of JavaScript arrays, and I hate having to re-learn them every time I return to web work. I do, however, spend a lot of time in Java, and the [`ArrayList`](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayList.html) has become my good friend...so good, in fact, that I've attempted to implement most of it in JavaScript here.

A few of the methods from the Java `ArrayList` class have intentionally not been implemented for reasons of JavaScript: `iterator()`, `listIterator()`, and `toArray()`. On the other hand, I've added a `toSet()` method. Please read the Java documentation for more details about what each method does.

Here's the API:

Return Type	| Name					| Parameters
:---------- | :-------------------- | :---------
*boolean*	| **add**				| ([index,] object)
*boolean*	| **addAll**			| ([index,] objects)
*undefined*	| **clear**				| ()
*array*		| **clone**				| ()
*boolean*	| **contains**			| (object)
*undefined*	| **ensureCapacity**	| (capacity)
*object*	| **get**				| (index)
*integer*	| **indexOf**			| (object)
*boolean*	| **isEmpty**			| ()
*integer*	| **lastIndexOf**		| (object)
*object*	| **remove**			| (object)
*boolean*	| **removeAll**			| (objects)
*undefined*	| **removeRange**		| (startIndex, endIndex)
*boolean*	| **retainAll**			| (objects)
*undefined*	| **set**				| (index, object)
*integer*	| **size**				| ()
*array*		| **subList**			| (start, end)
*array*		| **toSet**				| ()
*undefined*	| **trimToSize**		| (size)
