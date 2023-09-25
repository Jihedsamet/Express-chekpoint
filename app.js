const express = require("express");
const bodyParser = require("body-parser");
const dateCondiion= require("./Middlewares/date")


const app = express();
const port = 3500;

app.use(bodyParser());

// DefineRoutes
app.get("/", (req, res) => {
  res.status(200).send("hello😊");
});



app.get("/welcome",dateCondiion,(req,res)=>{
  res.status(200).send("<h2>Welcomeeee😉</h2>")
})

app.get("/home", (req, res) => {
  try {

    res.sendFile(__dirname+"/Views/index.html",(err)=>{
      res.status(404).send("<h2>sorry😒</h2>")})

  } catch (error) {
    res.status(404).send("<h2>sorry😒</h2>");
  }
});
//get data from the request using the post methode
app.post("/adduser", (req, res) => {
  if (req.body.name) {
    console.log(req.body);
    res.status(200).send("user-added-seccefully");
  } else {

    res.status(400).send("there-is-fault");
  }
});

//Start Server
app.listen(port, (err) => {
  if (err) {
    console.log("erreur in server", err);
  } else {
    console.log(`http://Localhost:${port} `);
  }
});
