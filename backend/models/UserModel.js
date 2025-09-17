const db = require("../config/db");

class UserModel {
  static async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }

  static async createUser(name, email, password, phone) {
    const [result] = await db.query(
      "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)",
      [name, email, password, phone]
    );
    return result.insertId;
  }
}

module.exports = UserModel;
