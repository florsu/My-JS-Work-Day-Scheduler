
hourlyBlock()
function hourlyBlock() {
    const currentHour = DateTime.now().toFormat('H')
    //const currentHour = 10
    for (let i = 1; i < 10; i++) {
        const rowHour = i+8
        const row = `row${i}`
        const rowEle = document.getElementById(row)
        rowEle.classList.remove('past')
        rowEle.classList.remove('present')
        rowEle.classList.remove('future')
        if (rowHour < currentHour) {
            rowEle.classList.add('past')
            console.log(row +' ' + rowHour +'<'+currentHour +' past')
        }
        if (rowHour == currentHour) {
            rowEle.classList.add('present')
            console.log(row +' ' + rowHour +'=='+currentHour +' present')
        }
        if (rowHour > currentHour) {
            rowEle.classList.add('future')
            console.log(row +' ' + rowHour +'>'+currentHour +' future')
        }
        
    }
}

// `Earth is estimated to be ${age} billion years old.`
