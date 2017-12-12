"use strict";

var nummern = require("../lib/nummern");

console.log();

/**
 * English 
 */

console.log("1234    = " + nummern(1234   ));

console.log("-100    = " + nummern(-100   ));

console.log("122.45  = " + nummern(122.45 ));

console.log("-1      = " + nummern(-1     ));

console.log("1000000 = " + nummern(1000000));

console.log("100000  = " + nummern(100000 ));

console.log();

/**
 * German 
 */

console.log("1234    = " + nummern(1234,    "german"));

console.log("-100    = " + nummern(-100,    "german"));

console.log("122.45  = " + nummern(122.45,  "german"));

console.log("-1      = " + nummern(-1,      "german"));

console.log("1000000 = " + nummern(1000000, "german"));

console.log("100000  = " + nummern(100000,  "german"));

console.log();
