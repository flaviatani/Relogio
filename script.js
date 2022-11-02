setInterval(setClock, 1000)

const hourTime = document.querySelector('[data-hour-time]')
const minuteTime = document.querySelector('[data-minute-time]')
const secondTime = document.querySelector('[data-second-time]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondTime, secondsRatio)
    setRotation(minuteTime, minutesRatio)
    setRotation(hourTime, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}