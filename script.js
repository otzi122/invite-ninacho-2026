const video = document.getElementById('bgVideo');
const videoContainer = document.querySelector('.video-background');
const menuTrigger = document.querySelector('.menu-trigger');
const sidebar = document.querySelector('.sidebar');
const bubblesContainer = document.querySelector('.bubbles');

video.loop = false;
video.muted = false;

sidebar.classList.remove('active');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;

    const duration = Math.random() * 4 + 4;
    bubble.style.animation = `float ${duration}s infinite`;
    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

setInterval(createBubble, 300);

menuTrigger.addEventListener('click', () => {

    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuTrigger.querySelector('.open').classList.remove('hidden');
        menuTrigger.querySelector('.close').classList.add('hidden');
        return;
    }

    videoContainer.classList.remove('video-hidden');
    menuTrigger.style.display = 'none';
    menuTrigger.querySelector('.open').classList.toggle('hidden');
    menuTrigger.querySelector('.close').classList.toggle('hidden');
    video.play();
});


video.addEventListener('ended', () => {
    sidebar.classList.add('active');
    videoContainer.classList.add('video-hidden');

    menuTrigger.style.display = '';
    menuTrigger.querySelector('.open').classList.add('hidden');
    menuTrigger.querySelector('.close').classList.remove('hidden');
});