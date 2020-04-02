const crypto = require("crypto"); //pacote próprio do Node para criptografia

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
