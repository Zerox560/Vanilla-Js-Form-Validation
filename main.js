import { checkLength, checkRequired, emailValidator, passwordsMatchValidator } from "./utils/validators.js";

/* Elementos del html requeridos */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Escucha cada vez que el formulario es enviado

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 6, 15);
    checkLength(password, 6, 25);
    emailValidator(email);
    passwordsMatchValidator(password, password2);
});
