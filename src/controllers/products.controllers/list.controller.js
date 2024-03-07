const { loadData } = require("../../data")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {

    const products = loadData()

    const productsGabinetes = products.filter(c => c.category === "gabinetes")
    const productsProcesadores = products.filter(c => c.category === "Procesadores")
    const productsMemoriasRam = products.filter(c => c.category === "Memorias Ram")
    const productsGPU = products.filter(c => c.category === "Placas de Video")

    res.render('./listProducts', {
        productsGabinetes,
        productsGPU,
        productsMemoriasRam,
        productsProcesadores,
        toThousand
    })
}