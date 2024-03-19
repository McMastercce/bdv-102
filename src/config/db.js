const path = require('path');
const { Pool } = require('pg');
require('dotenv').config({path:'./config/config.env'});

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, DATABASE_USE_SSL } = process.env;

const poolConfig = {
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  ssl: {
    require: true,
    rejectUnauthorized: false, 
  },
};

const pool = new Pool(poolConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end(),
};
