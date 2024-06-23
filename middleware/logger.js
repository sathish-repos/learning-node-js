// logger
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${
      req.originalUrl
    } ${new Date().toDateString()}`
  );
  next();
};

module.exports = logger;
