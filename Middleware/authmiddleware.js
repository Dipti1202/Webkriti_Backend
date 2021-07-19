const jwt = require("jsonwebtoken");
const client = require("../configs/db");

exports.requireLogIn = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.TOKEN, (err, decoded) => {
    if (err) {
      res.status(500).json({ 
        error: "Server error occured" ,
      });
    }
    const userId = decoded.user_id;

    client
      .query(`SELECT * FROM Users WHERE user_id = '${userId}';`)
      .then((data) => {
        if (data.rows.length === 0) {
          res.status(400).json({
            message: "Invalid token",
          });
        } else {
          req.user_id= userId;
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Database error occured",
        });
      });
  });
};