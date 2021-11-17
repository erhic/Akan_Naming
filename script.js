let male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

document.getElementById('submitbtn').addEventListener("click", function() {
    calculate();
})

const resultToCalculate = document.getElementById("result")


function calculate() {
    // event.preventDefault()

    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let daysNo = new Date(date).getDay();
    resultToCalculate.setAttribute("style", "display:block")



    if (gender == '' || date == "") {
        console.log("fill in your date birth and gender")
        resultToCalculate.innerHTML = ("fill in your date birth and gender")
    } else if (gender == 'female') {
        console.log(`You were born on a ${weekDays[daysNo]} and your Akan name is ${female[daysNo]}`)
        resultToCalculate.innerHTML = (`You were born on a ${weekDays[daysNo]} and your Akan name is ${female[daysNo]}`)
    } else if (gender == 'male') {
        console.log(`You were born on a ${weekDays[daysNo]} and your Akan name is ${male[daysNo]}`)
        resultToCalculate.innerHTML = (`You were born on a ${weekDays[daysNo]} and your Akan name is ${male[daysNo]}`)
    } else {
        console.log('You have not selected anything');
        resultToCalculate.innerHTML = ('You have not selected anything');
    }
    setTimeout(function() {
        resultToCalculate.setAttribute("style", "display:none")
    }, 5000);
}