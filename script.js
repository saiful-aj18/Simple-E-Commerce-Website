document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');

  menuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
  });

  closeDrawerBtn.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
  });

  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.innerHTML = savedTheme === 'dark'
      ? '<i class="fa fa-sun"></i>'
      : '<i class="fa fa-moon"></i>';
  }
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.innerHTML = newTheme === 'dark'
      ? '<i class="fa fa-sun"></i>'
      : '<i class="fa fa-moon"></i>';
  });
});

function togglePassword(fieldId = "password", icon = null) {
  const passwordField = document.getElementById(fieldId);
  if (!passwordField) return;
  if (passwordField.type === "password") {
    passwordField.type = "text";
    if (icon) {
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  } else {
    passwordField.type = "password";
    if (icon) {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }
}

