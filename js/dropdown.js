function setupDropdown(btnId, menuId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);

    btn.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        menu.classList.remove('show');
    });
}

setupDropdown('themeBtn', 'themeMenu');
const themeIcon = document.getElementById('themeIcon');

document.getElementById('themeMenu').addEventListener('click', e => {
    if (e.target.closest('.dropdown-item')) {
        const item = e.target.closest('.dropdown-item');
        const theme = item.dataset.theme;
        document.body.dataset.theme = theme;
        if (theme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        document.getElementById('themeMenu').classList.remove('show');
    }
});

setupDropdown('profileBtn', 'profileMenu');

document.getElementById('profileLink').addEventListener('click', () => {
    window.location.href = '#';
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

if (!document.body.dataset.theme) {
    document.body.dataset.theme = 'light';
}