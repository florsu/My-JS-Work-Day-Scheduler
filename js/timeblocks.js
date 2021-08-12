for (let i = 1; i < 10; i++) {
    const btn = `btn${i}`
    const textId = `text${i}`
    const btnEle = document.getElementById(btn)
    btnEle.dataset.textId = textId
    const text = localStorage.getItem(textId)
    if (text != null) {
        document.getElementById(textId).value = text
    }
    btnEle.addEventListener('click', btnListener)

}
function btnListener() {
    const textId = this.dataset.textId
    const text = document.getElementById(textId).value
    localStorage.setItem(textId, text)
    console.log(textId)
    console.log(text)
}
hourlyBlock()
function hourlyBlock() {
    const currentHour = DateTime.now().toFormat('H')
    //const currentHour = 10
    for (let i = 1; i < 10; i++) {
        const rowHour = i + 8
        const row = `row${i}`
        const rowEle = document.getElementById(row)
        rowEle.classList.remove('past')
        rowEle.classList.remove('present')
        rowEle.classList.remove('future')
        if (rowHour < currentHour) {
            rowEle.classList.add('past')
            console.log(row + ' ' + rowHour + '<' + currentHour + ' past1')
            console.log(`${row} ${rowHour}<${currentHour} past2`)
        }
        if (rowHour == currentHour) {
            rowEle.classList.add('present')
            console.log(row + ' ' + rowHour + '==' + currentHour + ' present1')
            console.log(`${row} ${rowHour}==${currentHour} present2`)
        }
        if (rowHour > currentHour) {
            rowEle.classList.add('future')
            console.log(row + ' ' + rowHour + '>' + currentHour + ' future1')
            console.log(`${row} ${rowHour}>${currentHour} future2`)
        }

    }
}

// `Earth is estimated to be ${age} billion years old.`
console.log('1 hello world')
console.log('2 h' + 'e' + 'l' + 'l' + 'o' + ' ' + 'world')
const h = 'hello'
const w = 'world'
console.log('3 hello world ${h} ${w}')
console.log(`4 hello world ${h} ${w}`)