import pgPromise from 'pg-promise';
import "dotenv/config.js"

const pgp = pgPromise();
const db = pgp(process.env.STRING_DB as string)

export default db;