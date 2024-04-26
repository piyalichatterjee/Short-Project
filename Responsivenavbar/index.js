let button = document.getElementById("btn")
let menu = document.getElementById("menu")
button.addEventListener("click", () => {
    let isVisible = menu.getAttribute("popup")
    if (isVisible === "false") {
        isVisible = menu.setAttribute("popup", "true")
        button.setAttribute("click", "true")
    }
    else if (isVisible === "true") {
        isVisible = menu.setAttribute("popup", "false")
        button.setAttribute("click", "false")
    }

})