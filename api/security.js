const { SHA256, HmacSHA256 } = require('crypto-js');

const { SECURITY_KEY, TRANSCRIPTS } = require('./data');

const getHash = (message) => {
  const hash = HmacSHA256(message, SECURITY_KEY).toString();

  return hash;
};

const verifyHash = (message, hash) => {
  const actualHash = HmacSHA256(message, SECURITY_KEY).toString();

  if(actualHash == hash) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getHash,
  verifyHash
};
