const timeCheck = require("./public/middleware")
const express = require("express");
const app = express();

app.get('/closing.html',(req,res)=>{
  res.sendFile(__dirname+'/public/closing.html')
})

app.use(timeCheck)
app.use(express.static(__dirname + '/public'));




const port = 5000;
app.listen(port, () => {
  
    console.log(`http://localhost:${port}`);
});