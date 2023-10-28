const backdrop = document.querySelector(".backdrop")
const openModale = document.querySelector('[data-action="open-modal"]')
const closeModale = document.querySelector('[data-action="close-modal"]')
const modale = document.querySelector("[data-modal]")
const body = document.querySelector("body")

<<<<<<< Updated upstream
openModale.addEventListener("click", (event) => {
    console.log(event.target.nodeName)
   if (event.target.nodeName === "IMG") {
      backdrop.classList.remove("is-hidden")
      window.addEventListener("keydown", onModalEscClose)
   }
})

closeModale.addEventListener("click", () => {
   backdrop.classList.add("is-hidden")
=======
openModale.addEventListener("click", () => {
  body.classList.add("show-modal")
  window.addEventListener("keydown", onModalEscClose)
>>>>>>> Stashed changes
})

closeModale.addEventListener("click", onBtnClose)

function onBtnClose() {
<<<<<<< Updated upstream
    backdrop.classList.add("is-hidden")
    window.removeEventListener("keydown", onModalEscClose);
=======
    body.classList.remove("show-modal")
    window.removeEventListener("keydown" , onModalEscClose);
>>>>>>> Stashed changes
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
    modale.classList.toggle("is-hidden")
}