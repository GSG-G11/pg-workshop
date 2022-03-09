require('env2')('.env');
const {Pool} = require('pg');

let DB_URL = '';

if(!process.env.DB_URL){
    throw new Error ("DB_URL NOT FOUND!");
}
else{
    DB_URL = process.env.DB_URL
}

const connection = new Pool({
    connectionString: process.env.DB_URL,
    ssl: false
});

module.exports = connection;