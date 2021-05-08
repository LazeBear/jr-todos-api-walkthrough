module.exports = function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
};
