const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const postRoutes = require("./routes/user");
const client = require("./configs/database");


const app = express();

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.status(200).send("Server is up and running!!");
  });

app.use("/auth",authRoutes);
app.use("/post",postRoutes);
app.use("/user",userRoutes);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });