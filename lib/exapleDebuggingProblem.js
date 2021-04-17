/**
 * Lebraray that demonstrates something throwing when it's init() is called
 *
 */

const example = {};

example.init = function () {
  // This is a error created intentionally
  const foo = bar;
};

module.exports = example;
