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

//Slider

const btnSlider = document.querySelectorAll(".slide");
const btnActive = document.querySelector("#slide1").className="active"
const btns = Array.from(btnSlider)
const portada = document.querySelector(".portada")
const overlay = document.querySelector(".portada .overlay")



btns.forEach((btn, index) => {



    btn.addEventListener("click", () => {

        if (index == 0) {
            portada.style.background = "url(img/bgtop.png)"
            portada.style.backgroundSize = "cover"
            overlay.style.display = "block"
            btn.parentNode.firstElementChild.className = "active"
            btn.parentNode.lastElementChild.className = "btnSlider"
            btn.parentNode.children[1].className = "btnSlider"

        }

        if (index == 1) {
            portada.style.background = "url(img/slide2.png)"
            portada.style.backgroundSize = "cover"
            overlay.style.display = "none"
            btn.className = "active"
            btn.previousElementSibling.className = "btnSlider"
        }

        if (index == 2) {
            portada.style.background = "url(img/slide3.png)"
            portada.style.backgroundSize = "cover"
            btn.className = "active"
            btn.previousElementSibling.className = "btnSlider"
            console.log()

        }
    })

})


// let i=0;
// while ( i<btn.length) {
//     console.log(btn)
//     i++
// }


// sliderBtn.map(btn=>{
//     btn.addEventListener("click",e=>{
//         btn.classList.replace("btnSlider","active")


//     })
// })

// const btnSlide1 = document.querySelector("#slide1")
// const btnSlide2 = document.querySelector("#slide2")
// const btnSlide3 = document.querySelector("#slide3")

// const portada = document.querySelector(".portada")
// const overlay = document.querySelector(".portada .overlay")

// btnSlide2.addEventListener("click",()=>{
//     portada.style.background="url(img/slide2.png)"
//     overlay.style.display="none"
// })
// btnSlide3.addEventListener("click",()=>{
//     portada.style.background="url(img/slide3.png)"
//     overlay.style.display="none"
// })

// btnSlide1.addEventListener("click",()=>{
//     portada.style.background="url(img/bgtop.png)"
//     overlay.style.display="block"
// })