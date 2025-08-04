// *********************************************************************
// THEME
// *********************************************************************

function setTheme(mode) {
  const html = document.documentElement;
  if (mode === 'dark') {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'system';
  if (current === 'dark' || (current === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

function applyInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
}

applyInitialTheme();

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('[data-theme-toggle]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});


// *******************************************************
// SHOW/HIDE DROPDOWN/BUTTON Phone size
// *******************************************************


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

// *******************************************************
// SHOW/HIDE Navbar
// *******************************************************

document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const maxScroll = 100; // a qué altura se desvanece completamente
  const scrollTop = window.scrollY;

  let opacity = 1 - Math.min(scrollTop / maxScroll, 1);
  navbar.style.opacity = opacity;
});

// *******************************************************
// dropdown + button
// *******************************************************

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("contactDropdownBtn");
  const dropdown = document.getElementById("contactDropdown");

  if (btn && dropdown) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("opacity-0");
      dropdown.classList.toggle("scale-95");
      dropdown.classList.toggle("pointer-events-none");
    });

    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("opacity-0", "scale-95", "pointer-events-none");
      }
    });
  }
});

// *******************************************************
// Redirect function in language select
// *******************************************************
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('languageSelector');
  selector.addEventListener('change', function () {
    window.location.href = this.value;
  });
});
