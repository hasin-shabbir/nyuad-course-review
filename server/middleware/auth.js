const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(200).json({success: false, tokenValid: false, message: 'you must be logged in'}); //token missing
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(200).json({success: false, tokenValid: false, message: 'you must be logged in'}); //token invalid
  }
  return next();
};

module.exports = verifyToken;