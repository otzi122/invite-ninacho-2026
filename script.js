// Control de sonido del video
const video = document.getElementById('bgVideo');
const soundToggle = document.querySelector('.sound-toggle');

// Iniciar video en silencio
video.muted = false;

soundToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    soundToggle.textContent = video.muted ? '🔇' : '🔊';
    soundToggle.classList.toggle('unmuted');
});

// Crear burbujas dinámicamente
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

// Crear burbujas periódicamente
setInterval(createBubble, 300);

// Funcionalidad del sidebar
const menuTrigger = document.querySelector('.menu-trigger');
const sidebar = document.querySelector('.sidebar');

menuTrigger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuTrigger.querySelector('.open').classList.toggle('hidden');
    menuTrigger.querySelector('.close').classList.toggle('hidden');
});

// Cerrar sidebar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuTrigger.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});