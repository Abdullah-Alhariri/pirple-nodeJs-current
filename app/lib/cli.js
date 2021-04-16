/**
 * CLI-Related Tasks
 *
 */

// Dependencies
const readline = require("readline");
const util = require("util");
const debug = util.debuglog("cli");
const events = require("events");
class _events extends events {}
const e = new _events();

// Instantiate the CLI module object
const cli = {};

// Input processor
cli.procesInput = function (str) {
  str = typeof str == "string" && str.trim().length > 0 ? str.trim() : false;
  // Only process the input if the user actually wrote something. Otherwise it will ignore
  if (str) {
    // Codify the unique strings that identify the unique questions allowed tio be asked
    const uniqueInput = [
      "man",
      "help",
      "exit",
      "stats",
      "list users",
      "more user info",
      "list checks",
      "more check info",
      "list logs",
      "more log info",
    ];

    // Go throught the possible inputs, emit an event when a match is found
    const matchFound = false;
  }
};

// Init script
cli.init = function () {
  // Send the sart message to the console, in orange
  console.log("\x1b[34m%s\x1b[0m", "Background CLI are running");

  // Sart the interface
  const _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });

  // Create an initial prompt
  _interface.prompt();

  /// Handle each line of input separately
  _interface.on("line", function (str) {
    // Send to th input proccesor
    cli.procesInput(str);

    // Re-initialize the prompt afterwards
    _interface.prompt();
  });

  // If the user stops the CLI, kill the associated process
  _interface.on("close", function () {
    process.exit(0);
  });
};

module.exports = cli;
