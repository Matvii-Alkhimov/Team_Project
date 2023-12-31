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
    const img = document.querySelector('.img2')
    const img1 = document.querySelector('.img1')
    const li = event.target.closest('li') 
    const nameElement = li.querySelector('.name') 
    const name = nameElement.textContent 
    document.querySelector('.p-info').textContent = `${name} is the largest music festival` 
    document.querySelector('.p-info:nth-child(4)').textContent = `${li.querySelector('.date').textContent}`
    document.querySelector('.p-info:nth-child(7)').textContent = `${li.querySelector('.place').textContent}`
    console.log(img,img1,nameElement,document.querySelector('.p-info'))
    img1.style = "border-radius: 50%;width:132px; height:132px"
    img.style = "width:700px;height:400px"
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=wfAi1gocagJe9lBfGlvRi4NoldweukkN&id=${id}`) 
    .then(resp => resp.json())
    .then(re => img.src = re['_embedded']['events'][0]['images'][0]['url'])
    .then(r => img1.src = r)
    console.log(backdrop);
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
