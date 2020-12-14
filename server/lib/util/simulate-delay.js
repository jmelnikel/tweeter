/* eslint-disable */
"use strict";

// This module exports a utility function for simulating
// delay (for example, in network or file system operations)
// using the builtin setTimeout.
//
// This is used to make the front-end behaviour a little more
// realistic even while we use a simplistic "in-memory" db.

// The delay has been disabled as it was for production purposes only.
function someMilliseconds() {
  return 0;
}

module.exports = function simulateDelay(callback) {
  setTimeout(callback, someMilliseconds());
}



// function someMilliseconds() {
//   return Math.floor(Math.random() * 400) + 100;
// }