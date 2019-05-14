let config = {
    'username': process.env.DATABASE_USER,
    'password': process.env.DATABASE_PASSWORD,
    'database': process.env.DATABASE_NAME,
    'host': process.env.DATABASE_HOST,
    'dialect': 'mysql'
};
module.exports = config;