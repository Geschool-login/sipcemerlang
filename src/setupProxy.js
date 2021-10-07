const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/_api', { target: 'https://yogya.geschool.net', changeOrigin: true }));
    // app.use(proxy('/', { target: 'https://yogya.geschool.net', changeOrigin: true }));
};

// module.exports = function(app) {
//     app.use(proxy('/_api', { target: 'https://teach.geschool.net/',  secure: false, }));
//     app.use(proxy('/p/', { target: 'https://teach.geschool.net/',  secure: false, }));
// }; 