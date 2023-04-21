const { connect } = require('./client');

// establishes a connection with the game server


console.log("Connecting ...");
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    }
  };
  return stdin;
};