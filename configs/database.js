const{Client } = require("pg");
const client = new Client ({
  user: 'postgres',
  host: 'localpost',
  database: 'webdev',
  password: 'LwS1FBNAVCHo8zTRB_ppq1kK7bm3GFZm',
  port: 5432,
});

// client.on("connect", ()=>{
//   console.log("databseconnected")
// })
module.exports =  client;