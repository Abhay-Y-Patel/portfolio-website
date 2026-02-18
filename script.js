/*----[ Footer Year ]----*/
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/*----[ Mobile Menu Toggle ]----*/
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.contains("open");

    if (isOpen === true) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      navMenu.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });

  /* Close menu after clicking a link (mobile) */
  const navLinks = navMenu.querySelectorAll("a");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }
}

/*----[ Fake Form Submit Message ]----*/
const fakeForm = document.getElementById("fakeForm");
const formMsg = document.getElementById("formMsg");

if (fakeForm && formMsg) {
  fakeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMsg.textContent = "Thanks! This form is a design demo on GitHub Pages. Please email me directly.";
  });
}
