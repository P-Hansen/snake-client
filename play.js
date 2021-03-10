const connect = require('./client');

console.log('Connecting ...');
const conn = connect();

conn.write("Name: FIL");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') { //ctrl+c input
    console.log("Goodbye");
    process.exit();
  }
};

setupInput();
process.stdin.on("data", handleUserInput);


/*
process.stdin.on("data", (key) => {
  console.log(key);
  switch (key) {
    case "\033[A"://up
      console.log("Move: up");
      break;
    case "\033[B"://down 
      console.log("Move: down");
      break;
    case "\033[D"://left
      console.log("Move: left");
      break;
    case "\033[C"://right
      console.log("Move: right");
      break;
  }
});
*/