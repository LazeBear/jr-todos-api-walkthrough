const express = require('express');
const cors = require('./middleware/cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors);

app.use(routes);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
