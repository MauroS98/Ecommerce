const { loadData, saveData } =require("../../data")

module.exports= (req,res)=>{
    
    const {name, price, description,category} = req.body;
    // const image = req.file;
    const producto =loadData();
    const newID=producto[producto.length-1].id +1
const newproducto ={
    id:newID,
    name:name.trim(),
    price: +price,
    description:description.trim(),
    category:category.trim(),
    image: req.file ? req.file.filename : "default-image.png",
    
};
producto.push(newproducto)
saveData(producto)
    res.redirect(`/admin/lista-producto`);
    }