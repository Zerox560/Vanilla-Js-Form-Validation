/* Añaden los estilos de error o exito a los elementos html */

export function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

export function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

/* Retorna el nombre del input */

export function getInputName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/* Valida el email */

export function emailValidator(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        showSuccess(email);
    } else {
        showError(email, "Email is not  valid.");
    }
}

/* Valida que las dos contraseñas coincidan */

export function passwordsMatchValidator(password1, password2) {
    if (password1.value === password2.value) {
        showSuccess(password2);
    } else {
        showError(password2, "The passwords are not equal.");
    }
}

/* Valida cada input */

export function checkRequired(inputsArr) {
    inputsArr.forEach((input) => {
        if (input.value.trim().length === 0) {
            showError(input, `${getInputName(input)} is required.`);
        } else {
            showSuccess(input);
        }
    });
}

/* Valida el largo de un input */

export function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getInputName(input)} must be at least ${min} characters.`
        );
    } else if (input.value.length > max) {
        showError(input, `${getInputName(input)} must be less than ${max}.`);
    } else {
        showSuccess(input);
    }
}
