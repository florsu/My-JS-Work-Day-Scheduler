const DateTime = luxon.DateTime
const dateNow = DateTime.now().toLocaleString(DateTime.DATE_HUGE)
const currentDayEle = document.getElementById('currentDay')
currentDayEle.innerText = dateNow