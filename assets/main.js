window.onscroll = function () {
  compactHeader();
};

document.addEventListener("DOMContentLoaded", () => {
  compactHeader();

  document.querySelectorAll("[data-toggle]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const collapsable = document.getElementById(trigger.dataset.toggle);
      if (collapsable) {
        collapsable.parentNode.closest(".has-toggler").classList.toggle("collapsed");
      }
    });
  });

  document.querySelectorAll(".what-item").forEach((column) => {
    column.addEventListener("click", (e) => {
      if (e.target.classList.contains("toggler")) return;
      const text = column.classList.remove("collapsed");
    });
  });

  const menuTrigger = document.getElementById("menu-trigger");
  menuTrigger.addEventListener("click", () => {
    document.documentElement.classList.add("show-menu");
  });

  const closeMenu = document.getElementById("close-menu");
  closeMenu.addEventListener("click", () => {
    document.documentElement.classList.remove("show-menu");
  });

  const menuLinks = document.querySelectorAll("#menu .links a");
  menuLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
      document.documentElement.classList.remove("show-menu");
      setTimeout(() => {
        document.getElementsByTagName("header")[0].classList.add("scroll-hide");
      }, 100);
    });
  });
});

function compactHeader() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").classList.add("compact");
  } else {
    document.getElementById("header").classList.remove("compact");
  }
}
