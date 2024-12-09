const assert = require("assert");
const { exec } = require("node:child_process");

const expected = {
  name: "infra-homework",
  version: "1.0.0",
  description: "homework tasks for frontend infra course",
  dependencies: ["eslint: ^9.16.0", "yaml: 2.6.1"],
};

exec("yarn project", (_, stdout) => {
  assert.deepEqual(JSON.parse(stdout), expected);
  console.log("Test passed!");
});
