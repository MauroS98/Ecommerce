const express= require("express");
const app= express();
const path= require("path");
const port = 3040;

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})
app.get("/footer" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/footer.html"));
})
app.get("/detalleProducto" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
})

app.get("/header" , (req , res) => {
    res.sendFile(path.join(__dirname, "./views/header.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})
app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/registro.html"))
})

app.get("/carrito",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/carrito.html"))
})

app.listen(port,()=>(console.log(`corriendo puerto http://localhost:${port}`)))
