if (!localStorage.getItem('token')) {
    window.location = 'index.html';
}

document.getElementById('menuToggle').onclick = () => {
    document.getElementById('sidebar')
        .classList.toggle('collapsed');
};

document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
};


document.getElementById('logout').onclick = () => {
    localStorage.removeItem('token');
    window.location = 'index.html';
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            btn.textContent = e.target.textContent + ' ▾';
            menu.style.display = 'none';
        }
    });
});


function setupDropdown(btnId, menuId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        menu.classList.remove('show');
    });

    menu.addEventListener('click', (e) => {
        if (e.target.matches('.dropdown-item')) {
            menu.classList.remove('show');
        }
    });
}

setupDropdown('themeBtn', 'themeMenu');
setupDropdown('profileBtn', 'profileMenu');
