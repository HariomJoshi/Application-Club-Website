// a wrapper function to attach a catch function call to the passed async function fn.

const catchAsync = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(next); //catch will call next upon error
};

export default catchAsync;
