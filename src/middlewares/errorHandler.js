import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  //   if (res.headersSent) {
  //     return next(error); // Если заголовки уже отправлены, передаем ошибку дальше
  //   }
  if (error instanceof HttpError) {
    res.status(error.status).json({
      status: error.status,
      message: error.name,
      error: error,
    });
  }
  return res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: error.message,
  });
};
