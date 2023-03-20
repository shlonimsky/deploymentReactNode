const express = require("express");
const cors = require('cors')
//to deploy:
const path = require('path')

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from zivuch server!" });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});

//to deploy:
app.use(express.static(path.join(__dirname,"client/build")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})