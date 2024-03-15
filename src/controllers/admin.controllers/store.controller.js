const { loadData, saveData } =require("../../data")
module.exports= (req,res)=>{
    const producto =loadData();
    
    const newID=producto[producto.length-1].id +1
    const {name, price, description,category} = req.body
const newproducto ={
    id:newID,
    name:name.trim(),
    price: +price,
    description:description.trim(),
    category:category.trim(),
    image: req.file? req.file.filename : "default-image.png",
    
}
producto.push(newproducto)
saveData(producto)
    res.redirect(`/`);
    }