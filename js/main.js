document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var overlay = document.querySelector(".mobile-menu-overlay");
  var menu = document.querySelector(".mobile-menu");
  var closeBtn = document.querySelector(".mobile-menu-close");
  if (!toggle || !overlay || !menu) return;

  function openMenu() {
    overlay.classList.add("open");
    menu.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    overlay.classList.remove("open");
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});
