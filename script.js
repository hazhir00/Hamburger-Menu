const bars = document.getElementById("bars");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

bars.addEventListener("click", () => {
   menu.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
   menu.style.transform = "translateX(100%)";
});
