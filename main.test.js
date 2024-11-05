const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", (done) => {
  const main = spawn("node", ["main.js", "avg"]);
  const outputs = [];

  main.stdout.on("data", (chunk) => {
    outputs.push(chunk);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Insufficient parameter!");
    done();
  });
});

test("Wrong command", (done) => {
  const main = spawn("node", ["main.js", "sum", "1", "2"]);
  const outputs = [];

  main.stdout.on("data", (chunk) => {
    outputs.push(chunk);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Wrong command!");
    done();
  });
});
