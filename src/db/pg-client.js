import pg from 'pg'
const db = new pg.Client(process.env.DB_URL)
export default db