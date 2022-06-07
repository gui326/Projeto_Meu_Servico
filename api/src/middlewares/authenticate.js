const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'No token provided.' });
    
    jwt.verify(token.split(' ')[1], process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ message: 'Failed to authenticate token.' });
      
      req.clientId = decoded.id;
      next();
    });
}

module.exports = verifyJWT;