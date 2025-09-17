const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// REGISTER (only for patients)
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Default role = "patient"
    await UserModel.createUser(name, email, hashedPassword, phone, "patient");

    res.json({ msg: "Patient registered successfully" });
  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).send("Server Error");
  }
};

// LOGIN (all roles)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findByEmail(email);
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send user info + role
    res.json({
      token,
      role: user.role,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).send("Server Error");
  }
};
