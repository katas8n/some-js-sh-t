import Database from 'better-sqlite3';

const db = new Database('./db.db');

db.prepare(
    `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT
        )`
).run();

export { db };
