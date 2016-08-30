const app = require('./server/server.js');
const PORT = process.env.PORT || 8128;

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
