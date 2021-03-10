const handleUserInput = (key) => {
  if (key === '\u0003') { //ctrl+c input
    console.log("Goodbye");
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
}


module.exports = setupInput;
//module.exports = handleUserInput;