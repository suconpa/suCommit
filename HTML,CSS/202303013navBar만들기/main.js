const toggleBut = document.querySelector(".navbar-toggleBut");

toggleBut.addEventListener("click", () => {
  // toggleBut을 click 했을 때 해당 class에 class명 부여
  document.querySelector(".navbar_menu").classList.toggle("active");

  document.querySelector(".navbar-icons").classList.toggle("active");
});
