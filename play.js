const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
const conn = connect();

conn.write("Name: FIL");

setupInput(conn);