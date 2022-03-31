const input = document.querySelector("input");
const button = document.querySelector("button");

function apiCloud() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=e356dd631da0fd204f84c27542766eb1&lang=ru')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector(".package-name").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = 'Ջերմաստիճանը : ' + Math.round(data.main.temp - 273) + ' &deg;';
            document.querySelector(".disclaimer").innerHTML = data.weather[0].description;
            document.querySelector(".features li").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        })
        .catch(function () {

        })
    input.value = ""
}

apiCloud()

input.addEventListener("keydown", function (keyPress) {
    if (keyPress.keyCode == 13) {
        apiCloud()
    }

})

button.addEventListener("click", () => {
    if (input.value != "") {
        apiCloud()
    }

})







