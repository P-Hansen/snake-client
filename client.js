const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  console.log("Successfully connected to game server!");
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("data", (thing) => {
    console.log(thing)
  });

  return conn;
}

module.exports = connect;