document.getElementById('togglePassword').addEventListener('click', function() { /* esto es para cambiar el logo de ver la clave */
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

window.addEventListener('load', function() { /* esto es para el loading */
    const loadingImage = document.querySelector('.loading-image');
    loadingImage.style.display = 'none'; // Oculta la imagen de carga una vez que la página se haya cargado completamente
});


document.getElementById('toggleDarkMode').addEventListener('click', function() { /* esto es para el dark mode */
    document.body.classList.toggle('dark-mode'); // Alternar la clase dark-mode en el cuerpo del documento al hacer clic en el botón
    
    var icon = document.getElementById('toggleDarkMode').querySelector('ion-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.setAttribute('name', 'moon-outline');
    } else {
        icon.setAttribute('name', 'sunny-outline');
    }
});

// esto es para inicializar el reproductor de video de YT

// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('video-container', {
//         height: '100%',
//         width: '100%',
//         videoId: 'T-YxHUoIEAU',
//         playerVars: {
//             autoplay: 1,
//             controls: 0,
//             showinfo: 0,
//             modestbranding: 1,
//             loop: 1,
//             playlist: 'T-YxHUoIEAU'
//         },
//         events: {
//             'onReady': onPlayerReady
//         }
//     });
// }

// para un video de YT de fondo
// function onPlayerReady(event) {
//     event.target.mute();
//     event.target.setPlaybackQuality('hd1080');
//     event.target.playVideo();
// }
