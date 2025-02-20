// Formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Enviando informacion, te estaremos contactando pronto"
      });
    e.target.reset();
});