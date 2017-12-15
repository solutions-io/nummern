"use strict";

var nummern = require("../lib/nummern");

console.log();

/**
 * English 
 */

console.log("1234    = " + nummern(1234   ));

console.log("-100    = " + nummern(-100   ));

console.log("122.045 = " + nummern(122.045));

console.log("-1      = " + nummern(-1     ));

console.log("1000000 = " + nummern(1000000));

console.log("-902.09 = " + nummern(-902.09));

console.log("100000  = " + nummern(100000 ));

console.log();

/**
 * German 
 */

console.log("1234    = " + nummern(1234,    "german"));

console.log("-100    = " + nummern(-100,    "german"));

console.log("122.045 = " + nummern(122.045, "german"));

console.log("-1      = " + nummern(-1,      "german"));

console.log("1000000 = " + nummern(1000000, "german"));

console.log("-902.09 = " + nummern(-902.09, "german"));

console.log("100000  = " + nummern(100000,  "german"));

console.log();

/**
 * Bosnian
 */

console.log("1234    = " + nummern(1234,    "bosnian"));

console.log("-100    = " + nummern(-100,    "bosnian"));

console.log("122.045 = " + nummern(122.045, "bosnian"));

console.log("-1      = " + nummern(-1,      "bosnian"));

console.log("1000000 = " + nummern(1000000, "bosnian"));

console.log("-902.09 = " + nummern(-902.09, "bosnian"));

console.log("100000  = " + nummern(100000,  "bosnian"));

console.log();
