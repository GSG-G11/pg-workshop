// Add code below to insert user info to your database

const connection = require('../config/connection')

const addUser = (name, location) => {
    const sql = {
        text: 'INSERT INTO users (name, location) VALUES ($1, $2);',
        values: [name, location]
    };;

    return connection.query(sql);
}

module.exports = addUser;