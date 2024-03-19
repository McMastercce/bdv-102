require('dotenv').config({path:"./config/config.env"})

// see https://neon.tech/docs/guides/node/
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeOptions = {
    host: PGHOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: true, // This ensures that SSL is used and the certificate is verified
        },
    },
};

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, sequelizeOptions);

module.exports = { sequelize, DataTypes, Model };

