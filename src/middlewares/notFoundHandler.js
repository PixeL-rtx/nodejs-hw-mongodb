export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Not found',
    error: `The requested resource ${req.url} was not found`,
  });
};
