const submitBtn = document.getElementById("submit-btn")
const firstName = document.getElementById("first-name")
const secondName = document.getElementById("second-name")
const classInput = document.getElementById("inputGroupSelect01")
const fromInput = document.getElementById("inputGroupSelect02")
const toInput = document.getElementById("inputGroupSelect03")
const timeInput = document.getElementById("inputGroupSelect04")
const bodyTable = document.getElementById("body-table")
let price = ""
let row = 1


submitBtn.addEventListener("click", function() {
    var classes = classInput.options[classInput.selectedIndex].text;
    var from = fromInput.options[fromInput.selectedIndex].text;
    var to = toInput.options[toInput.selectedIndex].text;
    var time = timeInput.options[timeInput.selectedIndex].text;
    let fullName = firstName.value + " " + secondName.value

    if ( classes === "Business" ) {
        price = "10jt"
    } else if ( classes === "Economy") {
        price = "5jt"
    } else {
        price = "15jt"
    }
    bodyTable.innerHTML += `<tr>
                                <th scope="row">${row}</th>
                                <td>${fullName}</td>
                                <td>${from}</td>
                                <td>${to}</td>
                                <td>${classes}</td>
                                <td>${time}</td>
                                <td>${price}</td>
                            </tr>`

    row++
    
})
