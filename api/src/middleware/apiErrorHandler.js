const ApiError = require("./ApiError");

function apiErrorHandler(err, req, res, next) {
  // in prod, don't use console.error or console.log
  // because it is not async
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).json({
      status: err.code,
      message: err.message,
      errors: err.errors || undefined,
    });
  }

  return res.status(500).json({ message: "something went wrong" });
}

module.exports = apiErrorHandler;
