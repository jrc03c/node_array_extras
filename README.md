_NOTE: I don't know what I'm doing. Sorry for any inconvenience._

To be quite honest, I always forget the stupid little quirks of JS arrays, and I hate having to re-learn them every time I return to web work. I do, however, spend a lot of time in Java and C#, so the Java `ArrayList` and the C# `List` have become my good friends...and now they're available in JS, too!

I haven't implemented the whole `ArrayList` class, though; just the methods I use frequently. Here are some examples. Please don't judge me.

```
var arrayOfThings = [];

for (var i=0; i<4; i++) arrayOfThings.add("foo");
// ['foo', 'foo', 'foo', 'foo']

arrayOfThings.contains("foo");
// true

arrayOfThings.remove("foo");
// ['foo', 'foo', 'foo']

arrayOfThings.add("bar");
// ['foo', 'foo', 'foo', 'bar']

arrayOfThings.set();
// ['foo', 'bar']

arrayOfThings.removeAll("foo");
// ['bar']

arrayOfThings.contains("foo");
// false
```
