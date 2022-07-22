const images = document.querySelectorAll(".panel")


images.forEach((item) => {
    item.addEventListener('click',() => {
        removeClass()
        item.classList.add("active")
        console.log("t123est");
    })
})


const removeClass =() => {
    images.forEach(item => {
        item.classList.remove("active")
    })
}