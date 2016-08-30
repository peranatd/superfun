const app = require('./server/server.js');
const PORT = 8128;

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
