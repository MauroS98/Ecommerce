<<<<<<< HEAD

const express= require("express");
const app= express()
const path= require("path");
const port = 3040;
app.use(express.static("public"))("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})
app.get("/header",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/header.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})
app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/registro.html"))
})

app.listen(port,()=>(console.log(`corriendo puerto http://localhost:${port}`)))
=======
const express = require('express');
const { prototype } = require('module');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.listen(port,()=> console.log(`http://localhost:${port}`));
>>>>>>> develop
