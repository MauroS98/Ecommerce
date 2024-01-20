const express = require('express');
const { prototype } = require('module');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
})
app.get("/login.html" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
app.get("/registro.html" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"));
});

app.listen(port,()=> console.log(`http://localhost:${port}`));