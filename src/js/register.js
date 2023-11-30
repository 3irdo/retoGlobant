// register.js

import { getApp } from '../js/config.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../js/firebaseCredentials.js';
import { registerVersion } from 'firebase/app';

// Obtén la instancia de la aplicación desde config.js
const app = getApp(firebaseConfig);  // Pasa las opciones de configuración aquí
const auth = getAuth(app);

let txt_email, txt_clave, btn_enviar;

window.onload = () => {
    txt_email = document.getElementById("txt_email");
    txt_clave = document.getElementById("txt_clave");
    btn_singIn = document.getElementById("btn_enviar-register");

    btn_singIn.addEventListener("click", registro);
}

function registro() {
    createUserWithEmailAndPassword(auth, txt_email.value, txt_clave.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
}
