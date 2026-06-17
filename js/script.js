window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  navbar.style.background =
    window.scrollY > 50
      ? "#112a55"
      : "rgba(10,30,70,.45)";
});

const menu =
document.getElementById("menu-toggle");

const nav =
document.getElementById("nav-links");

menu.addEventListener("click", function(){

   console.log("clicked");

   nav.classList.toggle("active");

});