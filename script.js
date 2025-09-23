document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const addCartBtns = document.querySelectorAll('.add-cart');
  const cartBadge = document.getElementById('cartBadge');
  const cartFab = document.getElementById('cartFab');

  menuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeDrawerBtn.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
     document.body.style.overflow = '';
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

  let cartCount = 0;

  addCartBtns.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartBadge.textContent = cartCount;

     
      cartFab.classList.add('pulse');
      setTimeout(() => {
        cartFab.classList.remove('pulse');
      }, 500);

      const productName = button.getAttribute('data-name');
      const productPrice = button.getAttribute('data-price');
      console.log(`Added "${productName}" to cart for $${productPrice}`);
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


