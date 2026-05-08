
const menuTrigger = document.querySelector('.menu-trigger');
const sidebar = document.querySelector('.sidebar');

menuTrigger.addEventListener('click', () => {

    sidebar.classList.add('active');
    menuTrigger.classList.add('hidden');
});