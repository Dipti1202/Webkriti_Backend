const bcrypt = require('bcrypt');
const { query } = require('express');
const jwt = require('jsonwebtoken');
const client = require("../configs/database");


exportS.follow = (req, res) =>{
    const {following_id , user_id} = req.body;
    client.query(`INSERT INTO  Following  (following_id ,user_id) VAULES ('${following_id}' ,'${user_id}');`)   
    .then((data) =>{
            res.json(data)
        })
    .catch((err)=>{
            return res.status(422).json({
                error:"Server Error!! "
            })
        })
};


exportS.unfollow = (req, res) =>{
    const {following_id } = req.body;
    client.query(`DELETE * FROM Following WHERE following_id = '${following_id}'`)
    .then((data) => {
        return res.status(200).json({
            message : "Unfollowed"
        })
    })
    .catch((err) => {
        return res.status(422).json({
            error : "Server Error !!"
        })
    })
     
   
};

exportS.update_profile = (req, res) =>{
    const {user_id , snap } = req.body;
    client.query(`UPDATE users SET  profile_picture_url = '${snap}' WHERE user_id  = '${user_id}'`)
     .then((data) => {
        res.status(200).json({
            message: "Successfully Updated ",
          });
     }) 
     .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: "Database error occured",
    });
  })
};


exportS.search = (req , res) => {
    const { username  } = req.body;
    client.query(`SELECT username , profile ,  FROM users Where username = '${username}';`)
    .then((data) =>{
        res.json(data)
    })
    .catch(err => {
        return res.status(422).json({
            error : "User not found !!"
        })
    })
};