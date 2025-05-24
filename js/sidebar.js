const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});



// Ikonani o'zgartirish uchun minimal kod
document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('toggleBtn');
  const icon = document.getElementById('toggleIcon');

  btn.addEventListener('click', () => {
    if (icon.classList.contains('fa-arrow-left')) {
      icon.classList.replace('fa-arrow-left', 'fa-arrow-right');
    } else {
      icon.classList.replace('fa-arrow-right', 'fa-arrow-left');
    }
  });
});
