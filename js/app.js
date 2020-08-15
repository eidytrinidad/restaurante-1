//Burger Menu

const btnBurger = document.querySelector(".btnBurger");
const icon = document.querySelector(".btnBurger i");
const burgerMenu = document.querySelector(".burgerMenu");

let value = false;
btnBurger.addEventListener("click", () => {

    console.log(!value)
    if (!value) {
        value = true
        burgerMenu.style.display = "flex";
        icon.classList.add("fa-times");
    } else {
        value = false;
        burgerMenu.style.display = "none";
        icon.classList.remove("fa-times")
    }
})


