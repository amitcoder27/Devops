const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "amitcoder27" && password === "123456") {
        return res.json({ success: true, message: "Login successful" });
    }

    return res.json({ success: false, message: "Invalid credentials" });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
