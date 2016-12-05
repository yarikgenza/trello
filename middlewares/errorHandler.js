const errorHandler = function(err, req, res, next) {
  let {status = 500, message = 'Server error'} = err;

  res
    .status(status)
    .json(message);
}

export default errorHandler;