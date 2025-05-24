document.addEventListener('DOMContentLoaded', () => {
    const success = localStorage.getItem('loginSuccess');
    if (success === 'true') {
        localStorage.removeItem('loginSuccess');

        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');

        setTimeout(() => toast.classList.add('show'), 20);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 300);
        }, 3000);
    }
});
