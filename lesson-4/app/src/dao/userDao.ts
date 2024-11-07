import { db } from '../db';

export class UserDAO {
    static findById(id: string | number) {
        const state = db.prepare('SELECT * FROM users WHERE id = ?');
        return state.run(id);
    }

    static getAllUsers() {
        const state = db.prepare('SELECT * FROM users');
        return state.all();
    }

    static createUser(user) {
        const state = db.prepare(
            'INSERT INTO users (email, password) VALUES (? , ?)'
        );

        state.run(user.email, user.password);
    }
    static deleteUser(id: number | string) {
        const state = db.prepare('DELETE FROM users WHERE id = ?');

        state.run(id);
    }

    static updateUser(id: number | string, email, password) {
        const state = db.prepare(
            'UPDATE users SET password = ? email = ? WHERE id = ?'
        );

        state.run(id, email, password);
    }
}
