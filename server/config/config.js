var env = process.env.NODE_ENV || 'development';


if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://test:test@ds153689.mlab.com:53689/todo-app';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://test:test@ds153689.mlab.com:53689/todo-app-test';
};
