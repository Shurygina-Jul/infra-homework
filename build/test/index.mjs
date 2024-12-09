import assert from 'node:assert';
import config from './config.yml';
import actual from './actual.json' with { type: 'json' };

assert.deepEqual(config, actual, "YAML to JSON conversion did not match!");
console.log("Test passed: YAML was loaded and converted correctly.");
