let string = ""
let buttons = document.querySelectorAll("button")
let buttonArray = Array.from(buttons)
buttonArray.forEach((button) => {
    button.addEventListener("click", (e) => {
        let textValue = e.target.textContent
        let input = document.querySelector("input")
        if (textValue == "=") {
            string = eval(string)
            input.value = string
        }
        else if (textValue == "AC") {
            string = ""
            input.value = string
        }
        else {
            string = string + textValue
            input.value = string
        }
    })
})