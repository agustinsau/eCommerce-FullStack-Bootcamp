function openDelModal(idProd, prodName) {

    //capturo del modal de borrado su header y su form
    
    let formModal = document.getElementById('delFormModal');
    let modalHeader = document.getElementById('deleteModalLabel');

    formModal.action = "/product/delete/" + idProd + "?_method=PUT"; //completo la ruta con el id del producto a eliminar
    modalHeader.innerText = "Eliminar Producto " + prodName;
}