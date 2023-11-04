const backdrop = document.querySelector(".backdrop")
const openModale = document.querySelector('[data-action="open-modal"]')
const closeModale = document.querySelector('[data-action="close-modal"]')
// const modale = document.querySelector("[data-modal]")
const body = document.querySelector("body")

openModale.addEventListener("click", (event) => {
    console.log(event.target.nodeName)
   if (event.target.nodeName === "IMG") {
      backdrop.classList.remove("is-hidden")
      window.addEventListener("keydown", onModalEscClose)
   }
})

closeModale.addEventListener("click", () => {
   backdrop.classList.add("is-hidden")
})

closeModale.addEventListener("click", onBtnClose)

function onBtnClose() {
    backdrop.classList.add("is-hidden")
    window.removeEventListener("keydown", onModalEscClose);
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