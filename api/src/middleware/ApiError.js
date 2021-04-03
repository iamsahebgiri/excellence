class ApiError {
  constructor(code, message, errors) {
    this.message = message;
    this.code = code;
    this.errors = errors;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static validationError(msg, errors) {
    return new ApiError(422, msg, errors);
  }

  static uniqueViolationError(msg) {
    return new ApiError(409, msg);
  }
}

module.exports = ApiError;
