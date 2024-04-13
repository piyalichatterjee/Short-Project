setInterval(() => {
    let date = new Date()
    let hTime = date.getHours()
    let mTime = date.getMinutes()
    let sTime = date.getSeconds()
    let hFormula = 30 * hTime + mTime / 2
    let mFormula = 6 * mTime
    let sFormula = 6 * sTime
    let hour = document.getElementById("hour")
    hour.style.transform = `rotate(${hFormula}deg)`
    let minute = document.getElementById("minute")
    minute.style.transform = `rotate(${mFormula}deg)`
    let second = document.getElementById("second")
    second.style.transform = `rotate(${sFormula}deg)`
}, 1000)
