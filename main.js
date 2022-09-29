//  change navbar style on scroll change
window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})

const faqEl = document.querySelectorAll(".faq");

faqEl.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
    })

});

// Show/hide nav menu 

const menu = document.querySelector(".nav__menu");
const menuOpenEL = document.querySelector("#open-menu-btn");
const menuCloseEL = document.querySelector("#close-menu-btn");



menuOpenEL.addEventListener("click", () => {
    menu.style.display = "flex";
    menuCloseEL.style.display = "inline-block";
    menuOpenEL.style.display = "none";
})

// menuCloseEL.addEventListener("click", () => {
//     menu.style.display = "none";
//     menuCloseEL.style.display = "none";
//     menuOpenEL.style.display = "inline-block"


// })


const closeNav = () => {
    menu.style.display = "none";
    menuCloseEL.style.display = "none";
    menuOpenEL.style.display = "inline-block";

}

menuCloseEL.addEventListener("click", closeNav);


