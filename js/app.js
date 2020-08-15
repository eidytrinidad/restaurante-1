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

// const btnSlider = document.querySelectorAll(".slide");
// const btnActive = document.querySelector("#slide1").className = "active"
// const btns = Array.from(btnSlider)
// const portada = document.querySelector(".portada")



// let index=2;
   
//     if (index == 0) {

//         btns[0].addEventListener('click', () => {
//             portada.style.background = "url(img/slide1.png)"
//             portada.style.backgroundSize = "cover"
    
//             btns[0].className = "active"
//             btns[1].className = "btnSlider"
//             btns[2].className = "btnSlider"
//         })
//     }
    
//     if (index == 1) {
        
//         btns[1].addEventListener('click', () => {
//             portada.style.background = "url(img/slide2.png)"
//             portada.style.backgroundSize = "cover"
        
//             btns[1].className = "active"
//             btns[0].className = "btnSlider"
//             btns[2].className = "btnSlider"
//         })
//     }
    
//     if (index==2) {
        
//         btns[2].addEventListener('click', () => {
//             portada.style.background = "url(img/slide3.png)"
//             portada.style.backgroundSize = "cover"
        
//             btns[2].className = "active"
//             btns[0].className = "btnSlider"
//             btns[1].className = "btnSlider"

           
//         })
//     }



// btns.forEach((btn, index) => {

//     btn.addEventListener("click", () => {

//         if (index == 0) {
//             portada.style.background = "url(img/bgtop.png)"
//             portada.style.backgroundSize = "cover"

//             btn.parentNode.firstElementChild.className = "active"
//             btn.parentNode.lastElementChild.className = "btnSlider"
//             btn.parentNode.children[1].className = "btnSlider"

//         }

//         if (index == 1) {
//             portada.style.background = "url(img/slide2.png)"
//             portada.style.backgroundSize = "cover"

//             btn.parentNode.firstElementChild.className = "btnSlider"
//             btn.parentNode.children[1].className = "active"
//             btn.parentNode.lastElementChild.className = "btnSlider"
//         }

//         if (index == 2) {
//             portada.style.background = "url(img/slide3.png)"
//             portada.style.backgroundSize = "cover"

//             btn.parentNode.firstElementChild.className = "btnSlider"
//             btn.parentNode.children[1].className = "btnSlider"
//             btn.parentNode.lastElementChild.className = "active"

//         }
//     })

// })



