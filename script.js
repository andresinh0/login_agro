document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var icon = document.getElementById('togglePassword');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.setAttribute('name', 'lock-open-outline');
    } else {
        passwordInput.type = "password";
        icon.setAttribute('name', 'lock-closed-outline');
    }
});

window.addEventListener('load', function() {
    const loadingImage = document.querySelector('.loading-image');
    loadingImage.style.display = 'none'; // Oculta la imagen de carga una vez que la página se haya cargado completamente
});


document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Alternar la clase dark-mode en el cuerpo del documento al hacer clic en el botón
    
    var icon = document.getElementById('toggleDarkMode').querySelector('ion-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.setAttribute('name', 'moon-outline'); // Cambiar el icono a modo oscuro
    } else {
        icon.setAttribute('name', 'sunny-outline'); // Cambiar el icono a modo claro
    }
});
