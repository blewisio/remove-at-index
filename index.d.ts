/**

Returns a new array with the element at the specified index removed.

@param array - the array to remove an element from
@param i - the index of the element to remove
@returns a new array with the element removed
@example
```
const result = removeAtIndex(['foo', 'bar', 'baz'], 0);
// result => ['bar', 'baz']
```
*/
declare function removeAtIndex<T>(array: T[], i: Number): T[];

export = removeAtIndex;
