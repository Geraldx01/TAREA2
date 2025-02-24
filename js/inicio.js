//Informacion que se muestra de cada producto

function mostrarInformacion(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'block';
}

function cerrarInformacion(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'none';
}



// Iniciar Session o Registrarse, elementos del DOM

const Abrir = document.getElementById('botonAbrir');
const seccionDesplegable = document.getElementById('seccionDesplegable');
const Cerrar = document.getElementById('botonCerrar');
const Inicio = document.getElementById('formularioInicio');
const Registrarse = document.getElementById('botonRegistrarse');

// Abrir la sección desplegable
Abrir.addEventListener('click', () => {
    seccionDesplegable.style.display = 'flex';
});

// Cerrar la sección desplegable
Cerrar.addEventListener('click', () => {
    seccionDesplegable.style.display = 'none';
});

// Simular inicio de sesión
Inicio.addEventListener('submit', (event) => {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Iniciando Sesion, espere....",
        showConfirmButton: false,
        timer: 3000
    });
    seccionDesplegable.style.display = 'none';
    event.target.reset();

});

// Simular registro
Registrarse.addEventListener('click', () => {
    Swal.fire({
        title: "Deseas continuar con el registro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "Se ha regristrado correctamente",
                icon: "success"
            });
        }
    });
    seccionDesplegable.style.display = 'none';
});


// Carrito de compras 
const carrito = {
    productos: [],
    total: 0,
    iva: 0,
    envio: false
};


// Carrito de compras, elementos del DOM
const listaCarrito = document.getElementById('lista-carrito');
const subtotalElement = document.getElementById('subtotal');
const ivaElement = document.getElementById('iva');
const totalElement = document.getElementById('total');
const envioCheckbox = document.getElementById('envio');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const pagarBtn = document.getElementById('pagar');
const carritoIcono = document.querySelector('.carrito-icono');
const carritoContainer = document.getElementById('carrito');
const contadorCarrito = document.querySelector('.contador-carrito');

// Mostrar/ocultar carrito
carritoIcono.addEventListener('click', () => {
    carritoContainer.style.display = carritoContainer.style.display === 'none' ? 'block' : 'none';
});

// Agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const precio = parseFloat(e.target.getAttribute('data-precio'));
        agregarAlCarrito(id, precio);
    });
});

function agregarAlCarrito(id, precio) {
    carrito.productos.push({ id, precio });
    actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.total = 0;

    carrito.productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.id} - $${producto.precio.toFixed(2)}`;

        // creamos un boton para eliminar articulos con createElement, un nombre con textContent y una funcion clic con addEventListener
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => eliminarDelCarrito(index));

        li.appendChild(eliminarBtn);
        listaCarrito.appendChild(li);

        carrito.total += producto.precio;
    });

    carrito.iva = carrito.total * 0.16;
    let totalConIVA = carrito.total + carrito.iva;

    if (carrito.envio) {
        totalConIVA += 5;
    }

    subtotalElement.textContent = carrito.total.toFixed(2);
    ivaElement.textContent = carrito.iva.toFixed(2);
    totalElement.textContent = totalConIVA.toFixed(2);
    contadorCarrito.textContent = carrito.productos.length;
}


// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.productos.splice(index, 1);
    actualizarCarrito();
}

// Vaciar carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito.productos = [];
    actualizarCarrito();
});

// Agregar/quitar envío
envioCheckbox.addEventListener('change', (e) => {
    carrito.envio = e.target.checked;
    actualizarCarrito();
});

// Pagar
pagarBtn.addEventListener('click', () => {
    Swal.fire({
        title: "Metodo de pago a Utilizar?",
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonColor: "#d33",
        denyButtonColor: "#14471E",
        confirmButtonColor: "#0915e8",
        confirmButtonText: "Tarjeta de Credito o Debito",
        denyButtonText: `Efectivo`
    }).then((result) => {

        Swal.fire({
            title: "Compra realizada con Exito!",
            toast: true,
            position: "center",
            text: "Recibirar un correo electronico de confirmacion",
            icon: "success"
        });

    });

    carrito.productos = [];
    actualizarCarrito();
});

/// Menu desplegable 

function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}


//Seccion de inicio carrusel 

document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.BtnInicio');
    const imagenes = document.querySelectorAll('.imagenInicio');
    const flechaIzquierda = document.querySelector('.flechaIzquierda');
    const flechaDerecha = document.querySelector('.flechaDerecha');

    let indiceActual = 0;
    const totalImagenes = imagenes.length;

    function moverImagenes() {
        carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % totalImagenes;
        moverImagenes();
    }

    function imagenAnterior() {
        indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
        moverImagenes();
    }

    flechaDerecha.addEventListener('click', siguienteImagen);
    flechaIzquierda.addEventListener('click', imagenAnterior);

    // Cambiar automáticamente las imágenes cada 4 segundos
    setInterval(siguienteImagen, 4000);
});


// SERVICIOS

// Seleccionar todos los botones y elementos relevantes
const servicio = document.querySelectorAll('.NuestrosServicios');

servicio.forEach(tarjeta => {
    const botonMasInfo = tarjeta.querySelector('.botonMasInfo');
    const botonVolver = tarjeta.querySelector('.botonVolver');
    const infoAdicional = tarjeta.querySelector('.infoAdicional');
    const imagen = tarjeta.querySelector('.imagenInfo');

    // Evento para mostrar más información
    botonMasInfo.addEventListener('click', () => {
        imagen.style.display = 'none';
        botonMasInfo.style.display = 'none';
        botonVolver.style.display = 'inline-block';
        infoAdicional.style.display = 'block';
    });

    // Evento para volver a la imagen
    botonVolver.addEventListener('click', () => {
        imagen.style.display = 'block';
        botonMasInfo.style.display = 'inline-block';
        botonVolver.style.display = 'none';
        infoAdicional.style.display = 'none';
    });
});



// Formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    const Form = Swal.mixin({
        Form: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (Form) => {
            Form.onmouseenter = Swal.stopTimer;
            Form.onmouseleave = Swal.resumeTimer;
        }
    });
    Form.fire({
        icon: "success",
        title: "Enviando informacion, te estaremos contactando pronto"
    });
    e.target.reset();
});
