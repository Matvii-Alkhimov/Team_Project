const backdrop = document.querySelector(".js-backdrop")
const openModale = document.querySelector('[data-action="open-modal"]')
const closeModale = document.querySelector('[data-action="close-modal"]')
const body = document.querySelector("body")

openModale.addEventListener("click", () => {
   body.classList.add("show-modal")
   window.addEventListener("keydown", onModalEscClose)
})

closeModale.addEventListener("click", onBtnClose)

function onBtnClose(){
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