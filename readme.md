# Pickle JS

Inspired by [python’s pickle module](https://docs.python.org/3/library/pickle.html),
Pickle is a way to serialize JavaScript code and data.

## Pickle Anything!

```js
var d = [1,2,3]
var p = pickle(d)

var d = {everything: "is", awesome: "!"}
var p = pickle(d)

var d = function(){ return this }
var p = pickle(d)
```

## Save to URL

```js
p.toUrl()
```

## Depickle from URL

```js
pickle().fromUrl()
```