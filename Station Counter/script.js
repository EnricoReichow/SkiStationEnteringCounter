let count = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let warningEl = document.getElementById("warning-phrase")

function increment() {
    count = count += 1
    countEl.textContent = count
    console.log(count)
}

function remove() {
    count = count -= 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function justNumbers(text) {
    var numbers = text.replace(/[^0-9]/g,'');
    return parseInt(numbers);
}

// function warningPhrase() {
//     var peopleInside = justNumbers(saveEl)
//     if (peopleInside > 40) {
//         warningEl.textContent = ("WARNING: The number of persons transpassed the limit!")
//     }
// }

