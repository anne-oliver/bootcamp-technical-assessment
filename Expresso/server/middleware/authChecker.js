require('dotenv').config();

module.exports = (req, res, next) => {

  //Node/Express lowercases all incoming header keys
  const clientSecret = req.headers['auth']

  if (clientSecret === process.env.AUTH_SECRET) {
    return next();
  } else {
    return res.status(401).send('Unauthorized: invalid or missing Authorization');
  }

};
