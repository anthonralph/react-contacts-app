const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://crudcrud.com/api/6b98e884ace04d348e454f68695c2a7f',
      changeOrigin: true,
    })
  );
};