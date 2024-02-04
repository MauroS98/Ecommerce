const express= require("express");
const app= express();
const path= require("path");
const port = 3040;

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.get("/header" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/header.html"));
})

app.listen(port,()=> console.log(`http://localhost:${port}`));