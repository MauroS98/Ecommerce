function confirmarEliminacion(productoId) {
    var confirmacion = confirm("¿Está seguro de que desea eliminar el producto " + productoId + "?");
    if (confirmacion) {
      eliminarProducto(productoId); // Función para eliminar el producto
    }
  }