// Control de sonido del video
const video = document.getElementById('bgVideo');
const soundToggle = document.querySelector('.sound-toggle');
const playToggle = document.querySelector('.play-toggle');

video.muted = true;

const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Tamaño aleatorio
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Posición horizontal aleatoria
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Duración aleatoria
    const duration = Math.random() * 4 + 4;
    bubble.style.animation = `float ${duration}s infinite`;
    
    bubblesContainer.appendChild(bubble);
    
    // Eliminar la burbuja después de la animación
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

setInterval(createBubble, 300);

const menuTrigger = document.querySelector('.menu-trigger');
const sidebar = document.querySelector('.sidebar');

menuTrigger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuTrigger.querySelector('.open').classList.toggle('hidden');
    menuTrigger.querySelector('.close').classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuTrigger.contains(e.target)) {
        video.muted = !video.muted;
        sidebar.classList.remove('active');
        menuTrigger.querySelector('.open').classList.remove('hidden');
        menuTrigger.querySelector('.close').classList.add('hidden');
    }
});

soundToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    soundToggle.innerHTML = video.muted
        ? '<i class="fa-solid fa-volume-xmark"></i>'
        : '<i class="fa-solid fa-volume-high"></i>';
    soundToggle.classList.toggle('unmuted');
});

playToggle.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playToggle.classList.remove('paused');
        return;
    }

    video.pause();
    playToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
    playToggle.classList.add('paused');
});