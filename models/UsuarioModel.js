const usuarios = [
    {
        nombre: "Santiago Builes Marulanda",
        telefono: "3049872356",
        correo: "correo@correo.com",
        contrasena: "1234567890",
        id: "id1234567890"
    },
    {
        nombre: "Juan Carlos Grisales",
        telefono: "3060983567",
        correo: "juan123@correo.com",
        contrasena: "0987654321",
        id: "id0987654321"
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.find((usuario) => correo == usuario.correo && contrasena == usuario.contrasena);

    return auth;
}