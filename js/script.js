const menuMobile = document.querySelector(".menu-mobile");

const header = document.getElementById("header");

const navLinks = document.getElementsByClassName("nav-link");

const item = document.querySelectorAll("[data-anime]");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");

  header.classList.toggle("position");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    // mobile
    menuMobile.classList.replace("bi-x", "bi-list");
    header.classList.remove("position");

    //web
    if (!navLinks[i].classList.contains("active")) {
      navLinks[i].classList.add("active");

      for (let j = 0; j < navLinks.length; j++) {
        if (j !== i) {
          navLinks[j].classList.remove("active");
        }
      }
    }
  });
}

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

window.addEventListener("scroll", () => {
  animeScroll();
});
