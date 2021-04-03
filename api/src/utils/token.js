const jwt = require('jsonwebtoken');

const createJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  createJwtToken,
};
