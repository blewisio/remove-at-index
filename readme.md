# remove-at-index

Remove an element at a specified index without modifying the original array.

## Install

```sh
npm install remove-at-index
```

## Usage

```js
const removeAtIndex = require('remove-at-index');

const array = ['foo', 'bar', 'baz'];
const result = removeAtIndex(array, 0);
// result => ['bar', 'baz']
// array => ['foo', 'bar', 'baz']
```

## API

### removeAtIndex(array, i)

Removes the element at the specified index without modifying the original array.

#### array

Type: `array` (required)

The array to remove an element from. Does not mutate the array.

#### i

Type: `number` (required)

The index of the element to remove.
