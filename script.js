const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", ()=>{
    const header = document.querySelector(".header")
    const navBar = document.querySelector(".nav-bar")
    header.classList.toggle("small-header")
    navBar.classList.toggle("small-nav")
})
