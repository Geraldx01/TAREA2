document.getElementById("btn-login").addEventListener("click", login);

/* función que valida el login */
function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/92372c3e-7909-4056-bbe7-39aea42d304b/KymMN20FRi.json" width="420" height="340"></iframe> <p>' + ptext + "</p>",
    });
}

/* función login */
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;


    // declaración de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";

    // Identificación de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"]
    let error_count = 0;
    let text = "";

    // ciclo FOR que lleva un recorrido con la llamada llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] === "") {
            // este es el texto que llevar el parámetro de la función validación_alert
            text = "Los campos requeridos NO pueden estar vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    // validación si los campos username y password son iguales
    if (error_count === 0) {
        if (user_input === username && pass_input === password) {
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 2000, // milisegundos equivalen a 2 seg
                html: '<iframe src="https://lottie.host/embed/2e237c3d-e3a0-48bd-9fe5-5665208ae4d7/CICJdcugB5.json" width="420" height="340"></iframe>'

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            // carga la función de arriba
            validation_alert(text);
        }
    }
}


