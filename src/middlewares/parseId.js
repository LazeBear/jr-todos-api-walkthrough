module.exports = function parseId(req, res, next) {
  let { id } = req.params;
  req.params.id = Number(id);
  next();
};
