let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => {
    handleUserInput(data);
  });
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
  if (data === 'h') {
    connection.write("Say: Hello!")
  }
  if (data === 'u') {
    connection.write("Say: Ur Cute!")
  }
  if (data === 'l') {
    connection.write("Say: Love You!")
  }
  if (data === 'y') {
    connection.write("Say: Y U So Cute?")
  }
};

module.exports = { setupInput };