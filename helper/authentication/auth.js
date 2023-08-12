const jwt = require('jsonwebtoken');
const codeAndMessage=require('../error-codes-messages/error-code-messages')
exports.checkToken = (req, res, next) => {
  jwt.verify(
    req.headers.authtoken,
    "uwduhjdhsajkchjewhdgehdahjshachjsdak",
    function (err, decoded) {
      if (err) {  
        console.log(err)
        return res.status(codeAndMessage.badRequestHttpCode).json({
          httpCode: codeAndMessage.badRequestHttpCode,
          code: codeAndMessage.badRequestHttpCode,
          message: codeAndMessage.notFoundUserMessage,
        });
      } else {
        req.userId = decoded.id;
        next();
      }
    }
  );
};