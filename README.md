# Gentoo - *Gen*erator *too*ls

Tools for [ES6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

* [accum](#accum)
* [compose](#compose)
* [dedupe](#dedupe)
* [filter](#filter)
* [forEach](#foreach)
* [lastValue](#lastvalue)
* [map](#map)
* [nthValue](#nthvalue)
* [partition](#partition)
* [pluck](#pluck)
* [skip](#skip)
* [take](#take)
* [loop](#loop)
* [everyN] (#everyN)
* [reduce] (#reduce)
* [range] (#range)
* [limit] (#limit)
* [takeWhile] (#takeWhile)
* [chain] (#chain)

## accum

`accum(gen) -> Generator`

Returns a new generator which yields an array accumulating the values from `gen`. Every time `next()` is called, the newest value from `gen` is added to the end of the array the generator yields.

```javascript

function * genInfinite () {
  let i = 0
  while (true) {
    yield ++i
  }
}

const accumGen = gentoo.accum(genInfinite())

accumGen.next().value
// [1]

accumGen.next().value
// [1, 2]

accumGen.next().value
// [1, 2, 3]
```

## compose

`compose(...generators) -> Generator`

Compose any number of generators. The returned generator will yield the values of the first generator until it's done, then the values of the second until it's done, etc.

```javascript

function * gen1 () {
  yield '🍕'
}

function * gen2 () {
  yield '🍤'
}

function * gen3 () {
  yield '🍓'
}

const composed = gentoo.compose(gen1(), gen2(), gen3())

[...composed]

// ['🍕', '🍤', '🍓']
```

## dedupe

`dedupe(gen [, eqFn]) -> Generator`

Returns a generator which iterates over the values from `gen` and yields values which are different than the previous value. `eqFn` may optionally be passed, to evaluate the equality of two values. By default, `===` is used.

```javascript
function * dupeGenerator () {
  yield '😎'
  yield '😎'
  yield '😳'
  yield '😳'
  yield '😅'
  yield '😅'
}

const dedupeGen = gentoo.dedupe(dupeGenerator())

[...dedupeGen]
// ['😎', '😳', '😅']
```

## filter

`filter(gen, fn [, thisValue]) -> Generator`

Returns a generator which will iterate over values from `gen` until `fn` returns a truthy result.

Every time `next()` is called, a value is retrieved from`gen` and passed to `fn`, until the result of calling `fn` is truthy. At that point, the value from `gen` will be yielded.

`thisValue` can optionally be passed in, for the context `fn` is called in.

```javascript

function * gen () {
  yield 1 
  yield 2 
  yield 3 
}

function even (n) {
  return n % 2 === 0
}

const filterGen = gentoo.filter(gen(), even)

filterGen.next().value
// 2
```

## forEach

`forEach(gen, fn [, thisValue]) -> void`

Calls `fn` for each value of `gen`.

`thisValue` can optionally be passed in, for the context `fn` is called in.

```javascript
function * gen () {
  yield '🍉'
  yield '🍜'
  yield '🍔'
}

gentoo.forEach(gen(), (n) => console.log(n))

// logs "🍉🍜🍔"
```

## lastValue

`lastValue(gen) -> [any]`

Returns the last value from `gen`. **NOTE:** you should only pass `lastValue` a generator which will end. If `gen` has an infinite number of values, `lastValue` will never finish.

```javascript

function * gen () {
  yield '🚤'
  yield '🚁'
  yield '👑'
}

gentoo.lastValue(gen())
// '👑'
```

## map

`map(gen, fn [, thisValue]) -> Generator`

Returns a generator that maps `fn` over the values of `gen`. Every time `next()` is called, the next value of `gen` will be passed to `fn`, and the result will be yielded.

`thisValue` can optionally be passed in, for the context `fn` is called in.

```javascript
function * gen () {
  yield '🍪'
  yield '🍩'
  yield '🍟'
}

function repeat (n) {
  return n + n
}

const repeatGen = gentoo.map(gen(), repeat)

[...repeatGen]
// ['🍪🍪', '🍩🍩', '🍟🍟']
```

## nthValue

`nthValue(gen, n) -> [any]`

Returns the `n`th value (zero-based) from `gen`.

```javascript
function * gen () {
  yield '📀'
  yield '📹'
  yield '🎈'
}

gentoo.nthValue(gen(), 1)
// '📹'
```

## partition

`partition(gen, fn) -> Generator`

Returns a generator that partitions the values from `gen` into two arrays: those for which `fn` returns a truthy value, and those for which `fn` returns a falsey value.

```javascript
function * gen () {
  yield 1
  yield 2
  yield 3
}

function even (n) {
  return n % 2 === 0
}

const partitionGen = gentoo.partition(gen(), even)

partitionGen.next().value
// [[], [1]]

partitionGen.next().value
// [[2], [1]]

partitionGen.next().value
// [[2], [1, 3]]
```

## pluck

`pluck(gen, name) -> Generator`

Returns a generator that plucks the property `name` from each of `gen`'s values. Every time `next()` is called, the next value from `gen` is retrieved, and the `name` property of that value is yielded.

```javascript
function * gen () {
  yield {animal: '🐮', flower: '🌷', tree: '🌲'}
  yield {animal: '🐗', flower: '🌹', tree: '🌳'}
  yield {animal: '🐵', flower: '🌺', tree: '🌴'}
}

const pluckGen = gentoo.pluck(gen(), 'flower')

pluckGen.next().value
// '🌷'

pluckGen.next().value
// '🌹'

pluckGen.next().value
// '🌺'
```

## skip

`skip(gen, n) -> Generator`

Skips the first `n` values from `gen`.

```javascript
function * genInfinite () {
  let i = 0
  while (true) {
    yield ++i
  }
}

const gen = genInfinite()

const skippedGen = gentoo.skip(gen, 2)

skippedGen.next().value
// 3

skippedGen.next().value
// 4

skippedGen.next().value
// 5
```

## take

`take(gen, n) -> Array`

Takes `n` values from `gen` and returns the values in an array.

```javascript
function * gen () {
  yield '🐍'
  yield '🌀'
  yield '🌊'
}

gentoo.take(gen(), 2)
// ['🐍', '🌀']
```

## loop

`loop(gen) -> Generator`

Yields the values from `gen` until `gen` is done, then yields those values forever in a loop.

```javascript
function * gen () {
  yield 1
  yield 2
  yield 3
}

const looped = gentoo.loop(gen())

looped.next().value
// 1

looped.next().value
// 2

looped.next().value
// 3

looped.next().value
// 1

looped.next().value
// 2

looped.next().value
// 3

looped.next().value
// 1
```

## everyN

`everyN(gen, n, [, takeFirst = true]) -> Generator`

Yields every `n` values from `gen`. `takeFirst` determines whether to yield the first value from `gen`. Default is `true`.

```javascript
function * gen () {
  let i = 0

  while (true) {
    yield i++
  }
}

const even = gentoo.everyN(gen(), 2)         // yields 0, 2, 4, 6...
const odd = gentoo.everyN(gen(), 2, false)   // yields 1, 3, 5, 7...

```

## reduce

`reduce(gen, fn, initial) -> [any]`

Reduces the generator into a single value. The fn is invoked with (memo, value).

```javascript
function * makeGenerator () {
  yield 1
  yield 2
  yield 3
}

const sum = gentoo.reduce(makeGenerator(), (memo, val) => memo + val, 0) // yields 6
```

## range

`range(start, stop [, step]) -> Generator`

Creates a generator that yields from start (inclusive) to stop (exclusive) with steps (optional, defaults
to 1).

```javascript
gentoo.range(0, 5) // yields 0, 1, 2, 3, 4
gentoo.range(2, 10. 2) // yields 2, 4, 6, 8
```

You can easily make an infinite stream by passing `Number.POSITIVE_INFINITY` to stop.
```javascript
const infinite = gentoo.range(0, Number.POSITIVE_INFINITY)
```

## limit

`limit(gen, n) -> Generator`

Limits the underlying generator to at most `n` values.

```javascript
function * makeGenerator () {
  yield 1
  yield 2
  yield 3
}

const sum = gentoo.limit(makeGenerator(), 2) // yields 1, 2
```

## takeWhile

`takeWhile(gen, fn) -> Generator`

Takes the underlying generator to the first time the `fn` returns false.

```javascript
const positives = gentoo.range(1, Number.POSITIVE_INFINITY);

const sum = gentoo.takeWhile(positives, (num) => num < 5) // yields 1, 2, 3, 4
```

## chain

`chain([val]) -> gentoo`

Allows chaining the operations, Underscore.js style. Call `value()` at the end of the chain to extract the value.

```javascript
function * makeGenerator () {
  yield 1
  yield 2
  yield 3
}

gentoo.chain(makeGenerator())
  .filter((num) => num < 3)
  .loop()
  .limit(5)
  .reduce((memo, val) => memo + val, 0)
  .value(); // 7
```
