const { createLogger, format, transports } = require('winston');
const path = require('path');
const env = process.env.NODE_ENV;

const logger = createLogger({
  level: env === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.colorize(),
    format.label({ label: path.basename(module.parent.filename) }),
    format.timestamp({ format: 'HH:mm:ss' }), //'YYYY-MM-DD HH:mm:ss'
    format.printf(
      (info) =>
        `${info.timestamp} [${info.label}] [${info.level}]: "${info.message}"`
    )
  ),
  transports: [new transports.Console()]
});

module.exports = logger;
