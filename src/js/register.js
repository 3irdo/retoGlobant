import { auth, createUserWithEmailAndPassword } from "../js/config";

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const registerMail = document.getElementById('rMail').value;
    const registerUser = document.getElementById('rUser').value;
    const registerPass = document.getElementById('rPass').value;

    auth
        .createUserWithEmailAndPassword(registerMail, registerPass)
        .then(userCredential => {
            console.log("Logged in");
        })
        .catch(error => {
            console.error("Error registering user:", error.message);
        });
});
