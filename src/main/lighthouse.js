const taint = require("taint");
const harass = require("harass");
const impede = require("impede");
const needle = require("needle");

module.exports = ({ hostname, endpoints, handler, rateLimit = 1000, iterations = 1 }) => {
  const api = taint(needle, [impede(rateLimit), harass(iterations)]);

  for (const endpoint of endpoints) {
    api.get(`${hostname}/${endpoint}`, handler);
  }
}
