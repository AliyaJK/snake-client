const { connect } = require('./client');
const { setupInput } = require('./input.js');

// establishes a connection with the game server


console.log("Connecting ...");

const connection = connect();

setupInput(connection);