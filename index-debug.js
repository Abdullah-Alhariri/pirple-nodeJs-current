/*
 * Primary file for API
 *
 */

// Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
const cli = require("./lib/cli");
const exapleDebuggingProblem = require("./lib/exapleDebuggingProblem");

// Declare the app
var app = {};

// Init function
app.init = function () {
  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  debugger;
  // Start the CLI, bbut make sure it starts last
  setTimeout(function () {
    cli.init();
  }, 500);
  let foo = 1;
  foo++;
  foo = foo * foo;
  foo = foo.toString();
  exapleDebuggingProblem.init();
};
debugger;

// Self executing
debugger;
app.init();
debugger;

// Export the app
module.exports = app;
