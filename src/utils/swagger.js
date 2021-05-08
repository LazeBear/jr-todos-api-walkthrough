const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JR TODO api',
      version: '1.0.0',
      contact: {
        name: 'Mason',
        email: 'mason.xiong@yahoo.com'
      }
    }
  },
  apis: ['./src/controllers/*.js'] // files containing annotations as above
};

module.exports = swaggerJsdoc(options);
