const express = require("express");
const router = express.Router();
const { requireLogIn } = require("../Middleware/authmiddleware");
const{allPsot,allfollowPost, createPost, myPost,like, dislike,comment,deletePost,deleteComment } = require("../controllers/post");



router.get("/allpsot",requireLogIn,allPsot );
router.get("/followpst",requireLogIn,allfollowPost);
router.post("/createpost",requireLogIn,createPost);
router.get("/mypost",requireLogIn,myPost);
router.put("/like",requireLogIn,like);
router.put("/dislike",requireLogIn,dislike);
router.put("/comment",requireLogIn,comment);
router.delete("/deletepost/:postId",requireLogIn,deletePost);
router.delete("/deletecomment/:postId",requireLogIn,deleteComment );


module.exports = router;


