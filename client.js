const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  console.log("Successfully connected to game server!");
  conn.write("Name: FIL");

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("data", (thing) => {
    console.log(thing)
  });

  return conn;
}

module.exports = connect;