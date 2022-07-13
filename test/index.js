"use strict";

require("hawk")
require("crypto")

eval("whateverf")

var sum = new Function('a', 'b', 'return a + b')
var m = new Map('a', 'b', 'return a + b')
var s = new Set('a', 'b', 'return a + b')

var myTimeout = setTimeout(myGreeting, 5000);

const thirty = 30;

function square(a) {
  return a * a;
}

var fruits = ['apple', 'banana', 'clementine'];

for (var fruit of fruits) {
  console.log(fruit);
}

function defs(a, b = 100, c = "cat") {
  return a + b + c;
}

Array.from("ABCDEFG")

function templating(b) {
  let x = 10;

  return `the ${x}th word is ${b}`
}

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17