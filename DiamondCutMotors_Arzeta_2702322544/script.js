const menuIcon = document.getElementById("men-icon");
const menuList = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("menu");
});