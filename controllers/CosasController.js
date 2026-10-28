import { getLocalStorage, removeLocalStorage } from "../utils/local-storage.js";
import { generalAlert } from "../utils/alerts.js";
import { kosas, guardarKosa } from "../models/CosasModel.js";

let token = getLocalStorage("token")
if (!token) {
    window.location.href = "/index.html"
}

let usuario = getLocalStorage("usuario")
console.log(usuario)

document.querySelector("#info-usuario").textContent = `Usuario: ${usuario}`
document.querySelector("#btn-salir").addEventListener("click", ()=> {
    removeLocalStorage("usuario")
    removeLocalStorage("token")
    window.location.href = "/index.html"
})

document.querySelector("#btn-agregar-kosa").addEventListener("click", () => {
    let nombre_producto = document.querySelector("#nombre-producto").value
    let precio = document.querySelector("#precio").value
    let categoria = document.querySelector("#categoria").value
    let materiales = document.querySelector("#materiales").value
    let dimensiones = document.querySelector("#dimensiones").value
    let stock = document.querySelector("#stock").value
    let descripcion = document.querySelector("#descripcion").value
    let foto_producto = document.querySelector("#foto-producto").value
    let kosa = {nombre_producto, precio, categoria, materiales, dimensiones, stock,  descripcion, foto_producto}
    kosas.push(kosa)
    guardarKosa("kosas", kosas)
    generalAlert("Registro exitoso", "Se guardó la kosa en la base de datos", "success")
})