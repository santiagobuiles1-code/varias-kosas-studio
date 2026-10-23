import { getLocalStorage, removeLocalStorage } from "../utils/local-storage.js";

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