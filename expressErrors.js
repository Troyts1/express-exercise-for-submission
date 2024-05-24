class ExpressError extends Error {
  constructor(message, status) {
      super(message);
      this.status = status;
      console.error(this.stack);
  }

  static missingNumsError() {
      return new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
  }

  static notFoundError() {
      return new ExpressError('Not Found', 404);
  }
}

module.exports = ExpressError;
