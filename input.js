let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') { //ctrl+c input
    console.log("Goodbye");
    process.exit();
  }
  console.log(key);
  switch (key) {
    case "\033[A"://up
      connection.write("Move: up");
      break;
    case "\033[B"://down
      connection.write("Move: down");
      break;
    case "\033[D"://left
      connection.write("Move: left");
      break;
    case "\033[C"://right
      connection.write("Move: right");
      break;
  };
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
}


module.exports = setupInput;

/*
process.stdin.on("data", (key) => {

  }
});
*/