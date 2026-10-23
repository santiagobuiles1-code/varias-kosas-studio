import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../utils/alerts.js";
import { setLocalStorage } from "../utils/local-storage.js";
import { generarToken } from "../utils/generators.js";

function iniciarSesion() {
    let correo = document.querySelector("#correo").value;
    let contrasena = document.querySelector("#clave").value;
    let auth = buscarUsuario(correo, contrasena)
    if(auth){
        let token = generarToken()
        setLocalStorage("token", token)
        setLocalStorage("usuario", auth.nombre)
        generalAlert("Bienvenido al Sistema", "Será redireccionado al catologo de cosas", "success")
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 2000)
        return
    }
    generalAlert("Error", "Usuario y/o contraseña incorrectos", "error")
    setTimeout(() => {
        return window.location.href = "/index.html"
    }, 1000)
}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion)