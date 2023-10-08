const jwt = require('jsonwebtoken');

const verifyTokenCustomer = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'oumayma', {},(err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    if (!decoded.idUser) {
      return res.status(401).json({ message: 'Invalid token. User ID not found.' });
    }

    req.user = decoded;
    next();
  });
};

const verifyTokenOwner = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token.replace("Bearer","").trim(), 'oumayma',{}, (err, decoded) => {
    if (err) {
      console.warn(err)
      return res.status(401).json({ message: 'Invalid token.' });
    }

    if (!decoded.idOwner) {
      return res.status(401).json({ message: 'Invalid token. Owner ID not found.' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = {
  verifyTokenCustomer,
  verifyTokenOwner,
};
