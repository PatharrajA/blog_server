var config = {
    dbname: '',
    host: '',
    secret: ''
}
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'Production') {
    config.dbname = process.env.prod_dbname,
        config.host = process.env.prod_host,
        config.secret = process.env.prod_secret;
} else {
    config.dbname = process.env.dev_dbname,
        config.host = process.env.dev_host,
        config.secret = process.env.dev_secret;
}

module.exports = config;