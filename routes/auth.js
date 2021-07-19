const express = require("express");
const router = express.Router();
const client = require("../configs/db");
const { signUp, signIn } = require("../controllers/auth");


router.post("/signUp", signUp);

router.post("/signIn", signIn);

module.exports = router;