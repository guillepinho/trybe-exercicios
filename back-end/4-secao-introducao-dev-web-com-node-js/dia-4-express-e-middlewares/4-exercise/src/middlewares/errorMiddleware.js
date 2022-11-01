const errorMiddleware = (err, req, res, next) => {
  // Receive error code and message
  const { code, message } = err;
  // Return it as http error and message
  return res.status(code).send({ message });
};

module.exports = errorMiddleware;