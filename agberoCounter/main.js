let passengerCount = 0;
const countElement = document.getElementById("count");

const increase = () => {
    countElement.innerText = ++passengerCount;
}


const decrease = () => {
    if (passengerCount > 0) {
        countElement.innerHTML = --passengerCount;
    }

    else {
        alert("There are no passengers");
    }
}

const saveElement = document.getElementById("save-element");


const save = () => {
    let countAndDash = passengerCount + " - "

    saveElement.textContent += countAndDash;
    passengerCount = 0;
    countElement.textContent = passengerCount;
}