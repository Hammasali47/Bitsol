const express = require("express");
const { registerUser,loginUser } = require("../controllers/usercontroller");
const authMiddleware = require("../Middleware/authmiddleware")
const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login",authMiddleware ,loginUser);
// routes.get("", getAllUsers);
// routes.get("/:id", getUserById);
// routes.post("/update/:id", updateUser);
// routes.post("/delete/:id", deleteUser);

module.exports = routes;