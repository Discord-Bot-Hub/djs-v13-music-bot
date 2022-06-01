const MainClient = require("./Aggressive Prime");
require('./server')
const client = new MainClient();

client.connect()

module.exports = client;