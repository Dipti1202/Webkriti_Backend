*Backend files for PStore is here*

PStore is a social media web application , in which we can post pictures , like it and also follow other people to see their posts .

##
 *Languages and Technologies*
 
Nodejs , Expressjs , Jwt <br>
Database : Postgresql<br>
Packages Used : Npm , JSON  , Bcrypt  <br>

#
 *Features* <br>
 
The following APIs calls can be made with this project <br>

 *User Related APIs* <br>
/follow - To follow a particular user<br>
/unfollow -To unfollow a particular user <br>
/update_profile_pic - To upload the profile of logged in user <br>
/serach_user - To search other users<br>
#
 *Post Related APIs* <br><br>
/allpost  - It will retrive all the post available from the users table  <br>
/allfollowpost - It will retrive the post of the person of all the users which are followed by logged in user from the users table  <br>
/creatpost - It will create a post with a caption and picture and add it in the Posts table   .<br>
/mypost - It will retrive all the post of logged in user from the posts table  <br>
/like - To like someone's post  present in the application <br>
/dislike - To like someone's post  present in the application <br>
/comment - To comment on someone’s post <br>
/deletepost/:postId -  To delete the post of logged in user <br>
/deletecomment/:postId/:commentId - To delete the comment  of logged in user on any post <br>


#
 *Setting Up the Project*
<br>
1. Clone the repo<br>
git clone https://github.com/ektak67/Webkriti-Backend-.git<br>
2. Install NPM packages <br>
npm install<br>
3. Create a .env file using the template .env.template and add values accordingly.<br>
#
*Usage*
<br>
1. To start the server <br>
  npm  start<br>
