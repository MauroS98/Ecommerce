
const { loadData } = require("../../data");

module.exports = (req, res) => {
  const { id } = req.params;
  const products = loadData();

  const productFind = products.find((p) => p.id === +id);
  res.redirect(`/products/lista`, { product: productFind });
};

// const products = require("../../data/quantumDataBase.json");
// const { saveData ,loadData } = require("../../data");

// module.exports = (req, res) => {
//   const { id } = req.params;
//   const { name, description, category, price } = req.body;
  
//  let newarray = products.map(p=>{
//   if (p.id == +id){
//     return {
//       id,
//       name:name,
//       description: description,
//       category:category,
//       price:+ price,
//       image: req.file ? req.file.filename : p.image,
//       imagesSecondary: newImages.length ? newImages : p.imagesSecondary,
//   }
// }
// return p
//  }); 
//  saveData(newarray);
//    res.redirect(`/products/lista`);
// }

//     if (req.files.imagesSecondary?.length) {
//       newImages = req.files.imagesSecondary?.map((img) => img.filename);
//     }
//   const productsMap = products.map((p) => {
//     if (p.id === +id) {
//       const productEdit = {
//         ...p, 
//         name: name.trim(),
//         description: description.trim(),
//          imagePrincipal: req.files.imagePrincipal?.length
//             ? req.files.imagePrincipal[0]?.filename
//             : p.imagePrincipal,
//         imagesSecondary: newImages.length ? newImages : p.imagesSecondary,
//         image: req.file ? req.file.filename : p.image,
//         category: category.trim(),
//         price:+price,
//       };
//       return productEdit;
//     }
//     return p;
//   });
//   saveData(productsMap);
//   res.redirect(`/products/lista/${id}`);
// };

