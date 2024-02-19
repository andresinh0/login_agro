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
