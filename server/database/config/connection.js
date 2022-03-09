require('env2')('.env');
const {Pool} = require('pg');

let DATABASE_URL = '';

if(!process.env.DATABASE_URL){
    throw new Error ("DB_URL NOT FOUND!");
}
else{
    DATABASE_URL = process.env.DB_URL
}

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

module.exports = connection;