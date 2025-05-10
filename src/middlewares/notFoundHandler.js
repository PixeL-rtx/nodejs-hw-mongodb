export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
    error: `The requested resource ${req.url} was not found`,
  });
};
