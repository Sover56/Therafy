const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".home-btn, .about-btn, .blog-btn, .resource-btn, .meet-btn").forEach(n => n.
  addEventListener("click", ()=>{
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))