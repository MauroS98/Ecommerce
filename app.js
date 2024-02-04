const express = require('express');
const { prototype } = require('module');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get("/header" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/header.html"));
})

app.listen(port,()=> console.log(`http://localhost:${port}`));