const mysql = require('mysql2');

const pool = mysql({
    host:'localhost',
    user:'root',
    database:'pulpos',
    password:''
});

module.exports = pool.promise();