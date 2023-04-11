const express = require('express')
const XLSX= require('xlsx')
const app = express()
const port = 3000

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}))
const connectDB= async()=>{
  try {
      await mongoose.connect("mongodb+srv://pratyush2582002:i9sIlFiQ6gYCYwS1@cluster0.qloxfsr.mongodb.net/test");
      console.log(`mongo connected`)
  } catch (error) {
      console.log("error")
  }
}
connectDB();


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);


app.get('/', (req, res) => {
   
    res.sendFile(__dirname+"/index.html")
  })



  app.post('/',async(req,res)=>{
    const user = new User({name: req.body.userId,pass: req.body.pass});
  
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

































