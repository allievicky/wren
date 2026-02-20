/* BACK TO TOP BUTTON */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* NAV SHRINK (MOBILE ONLY) */
const header = document.querySelector('header');

let ticking = false;

function handleNavShrink() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const isMobile = window.matchMedia('(max-width: 900px)').matches;

      if (!isMobile) {
        header.classList.remove('shrink');
        ticking = false;
        return;
      }

      header.classList.toggle('shrink', window.scrollY > 60);
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener('scroll', handleNavShrink);
window.addEventListener('resize', handleNavShrink);

/* HAMBURGER MENU TOGGLE */
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

/* Auto-update footer year */
document.getElementById("year").textContent = new Date().getFullYear();

