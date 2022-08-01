const errorMiddleware = (err, _req, res) => {
  if (err.isJoi) {
    return res.status(400).json({
      message: err.details[0].message,
    });
  }
  return res.status(500).json({
    message: 'Server Error',
  });
};

module.exports = errorMiddleware;
