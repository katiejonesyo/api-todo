const Pool = require("pg").Pool;

const pool = new Pool({
    connectionString: 'postgres://postgres:postgres@localhost:5432/perntodo',
    ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

module.exports = pool;