module.exports = (router) => {
    router.get('/database_month', require('./database-month'));
    router.get('/developer/group/:type', require('./developer/group'));
    router.get('/notice/:type?', require('./notice'));
};
