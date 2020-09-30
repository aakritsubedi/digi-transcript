const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  SECURITY_KEY: process.env.SECURITY_KEY,
  NODE_URL: process.env.NODE_URL || 'http://localhost:7545',
  ACCOUNT_ADDRESS: process.env.ACCOUNT_ADDRESS
}
