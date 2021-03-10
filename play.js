const connect = require('./client');
const setupInput = require('./input');
//const handleUserInput = require('./input');

console.log('Connecting ...');
const conn = connect();

conn.write("Name: FIL");

setupInput();



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