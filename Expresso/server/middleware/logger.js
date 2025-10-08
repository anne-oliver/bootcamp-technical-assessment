module.exports = (req, res, next) => {

  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const params = JSON.stringify(req.params);

  console.log(`[${timestamp}] ${method} ${url} ${params}`);

  next();

};
