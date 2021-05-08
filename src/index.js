const express = require('express');
const cors = require('./middlewares/cors');
const app = express();

app.use(express.json());
app.use(cors);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
