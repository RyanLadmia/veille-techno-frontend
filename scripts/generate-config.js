const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const apiPort = process.env.API_PORT;

if (!apiPort) {
  throw new Error('API_PORT is not defined');
}

const config = `window.__env = {
  API_PORT: ${JSON.stringify(apiPort)}
};
`;

fs.writeFileSync('public/config.js', config);

console.log(`API configuration generated: http://localhost:${apiPort}`);