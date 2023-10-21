const backdrop = document.querySelector(".")
const modalBtn = document.querySelector(".")
const body = document.querySelector("body")

modalBtn.addEventListener("click", () => {
   body.classList.add("show-modal")
   window.addEventListener("keydown", onModalEscClose)
})

function onModalEscClose(evt){
    if (evt.code === "Escape") {
        
    }
}

backdrop.addEventListener("click", onBackdropClick)

function onBackdropClick(event) {
    if (event) {
        
    }
}