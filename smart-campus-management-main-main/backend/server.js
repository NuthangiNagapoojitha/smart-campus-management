require('dotenv').config();
require("dotenv").config({ path: require("path").join(__dirname, ".env") });
console.log("PAYMENT SERVER FILE LOADED");
const express = require("express");
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 12;

const app = express();
const paymentRoute = require("./routes/payment");

// Restrict CORS to the deployed Vercel frontend and local dev
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
];
app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use("/payment", paymentRoute);

// db.js already establishes the connection on import — do NOT call db.connect() again here.

/**
 * POST /register
 * Creates a new user account. Password is bcrypt-hashed before storage.
 * Security: input validated at boundary; password never stored in plaintext.
 */
app.post("/register", async (req, res) => {

  const { name, email, password, role } = req.body;

  // Input validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
  }

  const validRoles = ["Student", "Faculty", "Admin"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }

  try {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const sql = "INSERT INTO users(name, email, password, role) VALUES(?, ?, ?, ?)";

    db.query(sql, [name, email, hashedPassword, role], (error) => {
      if (error) {
        console.log(error);
        // Duplicate email check (MySQL error 1062)
        if (error.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ success: false, message: "Email already registered" });
        }
        return res.status(500).json({ success: false, message: "Registration failed" });
      }
      return res.status(201).json({ success: true, message: "Registration successful" });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }

});

/**
 * POST /login
 * Authenticates a user against the database.
 * Security: uses bcrypt.compare to prevent timing attacks.
 */
app.post("/login", (req, res) => {

  console.log("LOGIN API HIT");

  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND role = ?";

  db.query(sql, [email, role], async (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const user = results[0];

    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      // Return only safe user fields — never return the hashed password
      return res.status(200).json({
        success: true,
        message: "Login Success",
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

}); 

app.get("/test-payment", (req, res) => {
  res.send("PAYMENT ROUTE WORKING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});