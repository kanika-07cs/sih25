const db = require("../config/db");

class UserModel {
  static async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }

  static async createUser(name, email, password, phone, role) {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)",
    [name, email, password, phone, role]
  );
  return result.insertId;
}

}

module.exports = UserModel;
