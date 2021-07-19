const bcrypt = require('bcrypt');
const { request } = require('express');
const jwt = require('jsonwebtoken');
const client = require("../configs/db");

exportS.allPost = (req, res) => {
    const {username , user_id , caption , snap } = req.body
    client.query(`SELECT post_id ,userId name , caption , post_url FROM posts ORDER BY date_created`),
    clinet.query(`SELECT content ,userId name FROM comments`) 
    .then((data)=>{
        res.json({data})
    })
    .catch(err=>{
        console.log(err)
    })
}

exportS.allfollowPost = (req, res) => {
    const { post_url , content} = req.body ;
    client.query(`SELECT post_id ,userId name , caption , post_url FROM posts ORDER BY date_created`)
   
    .then((data)=>{
        res.json({data})
    })
    .catch(err=>{
        console.log(err)
    })
}


exportS.createPost = (req, res) => {
    const { caption ,snap} = req.body 
   
    if(!snap ){
        return res.status(400).json ({
            error : "Add Post!",
        })
    }
    const post = new Post ( {
        caption,
        photo : snap ,
        postedBy : req.user
    })

    client.query(`INSERT INTO posts (caption , post_url) VALUES ('${caption}' , '${photo}')  WHERE user_id = '${user_id}` )
    .then(result => {
        res.json({
            post : result
        })
    })

    .catch(err => {
        console.log("Failed to Upload !!")
    })
}


exportS.myPost = (req, res) => {
    const id = req.userId ;
    const {username , snap , caption } = request.body
    mypost = client.query(
        `SELECT * FROM POSTS WHERE user_id = '$1'`, [id]
    )
    .then(mypost =>{
        res.json({mypost})
    })
    .catch(err =>{
        console.log(err)
    })
}

exportS(like )=(req,res)=>{
    const {user_id , post_id } = req.body;
    client.query(`INSERT INTO Likes (user_id , posr_id) Values (${Likes.user_id , Likes.post_id})`)
    .then((data)=>{
            return res.status(200).json({message : "Liked"})
    })
        .catch(err => {
           return res.status(422).json({
               err : err 
           })
        }
    )
}
exportS(dislike) =(req,res)=>{
    const {user_id , post_id } = req.body;
    client.query(`DELETE FROM Likes WHERE user_id = `)
    .then((data)=>{
            return res.status(200).json({message : "Unliked"})
    })
        .catch(err => {
           return res.status(422).json({
               err : err 
           })
        }
    )
    
}


exportS.comment = (req, res) => {
    const comment = {
        text :req.body.text ,
        postedBy : req.user.userId
    }
    client.query(`INSERT INTO comments (content) VALUES ('${comment.content}');`)
    client.query(`SELECT comments content , post_id WHERE post_id = '${post_id}' `)
    .then((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
    
}


exportS.deletePost = (req, res) => {
    const id  = parseInt(request.params.user_id);
    client.query(`DELETE FROM posts Where user_id = $1 ` ,[id] )
    .then( () =>{
        res.status(200).json({message : "Post Deleted"})
      })
    .catch(err => {
          return res.status(422).json({message : "Failed to  Delete"})
      })
}


exportS.deleteComment = (req, res) => {
    const id  = parseInt(request.params.user_id);
    client.query(`DELETE FROM comments Where user_id = $1 ` ,[id] )
    .then( () =>{
      res.status(200).json({message : "Comment Deleted"})
    })
    .catch(err => {
        return res.status(422).json({message : "Failed to  Delete"})
    })

}