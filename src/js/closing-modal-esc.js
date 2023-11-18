// const backdrop = document.querySelector(".backdrop")
// const openModale = document.querySelector('[data-action="open-modal"]')
// const closeModale = document.querySelector('[data-action="close-modal"]')
// const modale = document.querySelector("[data-modal]")
// const body = document.querySelector("body")

// openModale.addEventListener("click", (event) => {
//     console.log(event.target.nodeName)
//    if (event.target.nodeName === "IMG") {
//       backdrop.classList.remove("is-hidden")
//       window.addEventListener("keydown", onModalEscClose)
//    }
// })

// closeModale.addEventListener("click", () => {
//    backdrop.classList.add("is-hidden")
// openModale.addEventListener("click", () => {
//   body.classList.add("show-modal")
//   window.addEventListener("keydown", onModalEscClose)
// })

// closeModale.addEventListener("click", onBtnClose)

// function onBtnClose() {
//     backdrop.classList.add("is-hidden")
//     window.removeEventListener("keydown", onModalEscClose);
//     body.classList.remove("show-modal")
//     window.removeEventListener("keydown" , onModalEscClose);
// }

// backdrop.addEventListener("click", onBackdropClick)

// function onBackdropClick(event) {
//     if (event.currentTarget === event.target) {
//         onBtnClose()
//     }
// }

// function onModalEscClose(evt){
//     if (evt.code === "Escape") {
//         onBtnClose() 
//     }
// }

// // по кнопці

// openModale.addEventListener("click", toggleModal)
// closeModale.addEventListener("click", toggleModal)

// function toggleModal(){
//     document.body.classList.toggle("modal-open")
//     modale.classList.toggle("is-hidden")
// }
const backdrop = document.querySelector(".backdrop")
const openModale = document.querySelector('[data-action="open-modal"]')
const closeModale = document.querySelector('[data-action="close-modal"]')
// const modale = document.querySelector("[data-modal]")
const body = document.querySelector("body")

openModale.addEventListener("click", (event) => {
    console.log(event.target.nodeName)
   if (event.target.nodeName === "IMG") {
    let id = event.target.id
    const img = document.querySelector('.img1')
    const img1 = document.querySelector('.ima')
    const li = event.target.closest('li') 
    const nameElement = li.querySelector('.name') 
    const name = nameElement.textContent 
    document.querySelector('.p-info').textContent = `${name} is the largest music festival` 
    document.querySelector('.p-info:nth-child(4)').textContent = `${li.querySelector('.date').textContent}`
    document.querySelector('.p-info:nth-child(7)').textContent = `${li.querySelector('.place').textContent}` 
    console.log(id);
    img1.style = "border-radius: 50%;width:132px; height:132px"
    fetch(`https://pixabay.com/api/?key=39207344-802fb38289e47f3cf2d375300&id=${id}`) 
    .then(resp => resp.json()) 
    .then(re => img.scr = re)
    .then(r => img1.scr = r) 
    backdrop.classList.remove("is-hidden")
    window.addEventListener("keydown", onModalEscClose)
   }
})

closeModale.addEventListener("click", () => {
    backdrop.classList.add("is-hidden");
    openModale.addEventListener("click", () => {
        body.classList.add("show-modal")
        window.addEventListener("keydown", onModalEscClose)
    });
   backdrop.classList.add("is-hidden")
})

closeModale.addEventListener("click", onBtnClose)

function onBtnClose() {
    backdrop.classList.add("is-hidden")
    window.removeEventListener("keydown", onModalEscClose);
    body.classList.remove("show-modal")
    window.removeEventListener("keydown" , onModalEscClose);
}

backdrop.addEventListener("click", onBackdropClick)

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onBtnClose()
    }
}

function onModalEscClose(evt){
    if (evt.code === "Escape") {
        onBtnClose() 
    }
}

// по кнопці

openModale.addEventListener("click", toggleModal)
closeModale.addEventListener("click", toggleModal)

function toggleModal(){
    document.body.classList.toggle("modal-open")
    closeModale.classList.toggle("modal-close")
}
