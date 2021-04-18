/*
 * Primary file for API
 *
 */

// Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var cluster = require("cluster");
var os = require("os");

var app = {};

app.init = function (callback) {
  if (cluster.isMaster) {
    workers.init();

    setTimeout(function () {
      cli.init();
      callback();
    }, 50);

    // Fork the process
    for (var i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }
  } else {
    server.init();
  }
};

// Self invoking only if required directly
if (require.main === module) {
  app.init(function () {});
}

module.exports = app;
