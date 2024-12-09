const assert = require("node:assert");
const config = require("./config.yml");
const actual = require("./actual.json");

assert.deepEqual(config, actual, "YAML to JSON conversion did not match!");
console.log("Test passed: YAML was loaded and converted correctly.");
