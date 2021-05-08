require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const logger = require('./utils/logger');
const swaggerDoc = require('./utils/swagger');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
);
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(routes);

app.listen(PORT, () => {
  // logger.debug('debug example');
  logger.info(`server listening on port ${PORT}`);
});
