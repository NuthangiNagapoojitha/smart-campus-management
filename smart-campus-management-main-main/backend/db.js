require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: process.env.DB_PORT || 3306,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
   ssl: {
      rejectUnauthorized: false
   }
});

// Verify the pool can reach the database on startup
pool.getConnection((err, connection) => {
   if (err) {
      console.log("DATABASE CONNECTION ERROR:", err.message);
   } else {
      console.log("MySQL Pool Connected");
      connection.release();
   }
});

module.exports = pool;