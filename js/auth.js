document.getElementById('btnLogin').addEventListener('click', () => {
    const userEl = document.getElementById('username');
    const passEl = document.getElementById('password');
    const errEl = document.getElementById('error');

    const username = userEl.value.trim();
    const password = passEl.value.trim();
    errEl.textContent = '';

    if (username.length < 3) {
        return errEl.textContent = 'Username kamida 3 belgili bo‘lishi kerak.';
    }
    if (password.length < 6) {
        return errEl.textContent = 'Parol kamida 6 belgili bo‘lishi kerak.';
    }

    if (username === 'admin' && password === 'qazwsxedc') {
        localStorage.setItem('token', 'mocked-token-123');
        window.location = 'home.html';
    } else {
        errEl.textContent = 'Username yoki parol noto‘g‘ri.';
    }
});



document.getElementById('btnLogin').addEventListener('click', () => {
    const userEl = document.getElementById('username');
    const passEl = document.getElementById('password');
    const errEl = document.getElementById('error');
    const username = userEl.value.trim();
    const password = passEl.value.trim();
    errEl.textContent = '';

    if (username === 'admin' && password === 'qazwsxedc') {
        localStorage.setItem('loginSuccess', 'true');
        window.location = 'home.html';
    } else {
        errEl.textContent = 'Username yoki parol noto‘g‘ri.';
    }
});